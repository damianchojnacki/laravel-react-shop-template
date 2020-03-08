<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Order;
use App\OrderStatus;
use App\Product;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class OrderController extends Controller
{
    public function index($page){
        $orders = Order::with(['user.country', 'status'])->skip(($page - 1) * 10)->take(10)->get();

        return response(OrderResource::collection($orders), 200);
    }

    public function recent(){
        $orders = Order::with('user.country')->whereHas('status', function($status){
            $status->where('name', 'preparing');
        })->orderBy('created_at', 'DESC')->take(10)->get();

        return response(OrderResource::collection($orders), 200);
    }

    public function statuses(){
        $statuses = OrderStatus::all();

        return response($statuses, 200);
    }

    public function show($id)
    {
        $order = Order::with(['products.image', 'status', 'user.country'])->findOrFail($id);

        if(!Auth::user()->isAdmin() && Auth::user()->id != $order->user->id)
            return response("You are not authorized to see this order.", 401);

        return response(new OrderResource($order), 200);
    }

    public function search($id)
    {
        $order = Order::with(['status', 'user.country'])->where('id', 'like', "%$id%")->take(100)->get();

        return response(OrderResource::collection($order), 200);
    }

    public function delete($id)
    {
        Order::findOrFail($id)->delete();

        return response('Order has been deleted', 200);
    }

    public function make(Request $request)
    {
        $request->validate([
            'name' => 'required|string|min:1',
            'address' => 'required|string:min:6',
            'zip_code' => 'required|min:5|max:6',
        ]);

        if(count(\Session::get('cart'))){
            $order = new Order();

            Auth::check() && $order->user()->associate(Auth::user());
            $order->name = $request->name;
            $order->address = $request->address;
            $order->zip_code = $request->zip_code;

            $order->save();

            foreach(\Session::get('cart') as $product)
                $order->products()->attach(Product::find($product->id), ['quantity' => $product->quantity]);

            return Redirect::back();
        } else{
            \Session::flash('error', 'Your cart is empty.');

            return Redirect::back();
        }
    }

    public function createAdmin(Request $request)
    {
        $request->validate([
            'name' => 'string|min:1',
            'address' => 'string:min:6',
            'zip_code' => 'min:5|max:6',
            'status' => 'min:1|max:4',
            'products' => 'array',
            'user' => 'min:1',
            'date' => 'date',
        ]);

        if((Auth::check() && !Auth::user()->isAdmin()) || empty(\Session::get('cart'))){
            \Session::flash('error', 'Your cart is empty.');

            return Redirect::route('checkout')->setStatusCode(400);
        }

        $order = new Order();

        $request->exists('date') && $order->created_at = Carbon::createFromDate($request->input('date'));
        $request->exists('user') && $order->user()->associate(User::findOrFail($request->input('user')));
        Auth::check() && $order->user()->associate(Auth::user());
        (Auth::user()->isAdmin() && $request->exists('status')) && $order->status()->associate(OrderStatus::findOrFail($request->input('status')));

        $order->save();

        if($request->exists('products')){
            foreach($request->input('products') as $product){
                $existing = $order->products()->where('name', $product['name'])->first();

                if($existing){
                    $existing->pivot->quantity++;
                    $existing->pivot->save();
                }
                else
                    $order->products()->attach(Product::find($product['id']), ['quantity' => 1]);
            }
        } else{
            foreach(\Session::get('cart') as $product){
                $existing = $order->products()->find($product->id);

                if($existing){
                    $existing->pivot->quantity++;
                    $existing->pivot->save();
                }
                else
                    $order->products()->attach(Product::find($product->id), ['quantity' => 1]);
            }
        }

        return Redirect::back('checkout');
    }

    public function edit(Request $request)
    {
        $request->validate([
            'id' => 'uuid',
            'status' => 'required|min:1|max:4',
            'products' => 'required|array',
            'user' => 'required|min:1',
        ]);

        $order = Order::findOrFail($request->input('id'));
        $order->status()->associate(OrderStatus::findOrFail($request->input('status')));
        $order->user()->associate(User::findOrFail($request->input('user')));

        $order->products()->detach();

        foreach($request->input('products') as $product)
            $order->products()->attach(Product::find($product['id']), ['quantity' => $product['pivot']['quantity']]);

        $order->save();

        return response('Order has been updated', 200);
    }
}
