<?php

namespace App\Http\Controllers;

use App\Coupon;
use App\Http\Resources\OrderResource;
use App\Order;
use App\OrderDetails;
use App\OrderStatus;
use App\Product;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function __construct()
    {
        Auth::shouldUse('api');
    }

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

    public function create(Request $request)
    {
        $request->validate([
            'status' => 'required|min:1|max:4',
            'products' => 'required|array',
            'user' => 'required|min:1',
            'date' => 'date',
        ]);

        $order = new Order();
        $request->exists('date') && $order->created_at = Carbon::createFromDate($request->input('date'));
        $order->status()->associate(OrderStatus::findOrFail($request->input('status')));
        $order->user()->associate(User::findOrFail($request->input('user')));
        $order->save();

        foreach($request->input('products') as $product){
            $existing = $order->products()->where('name', $product['name'])->first();

            if($existing){
                $existing->pivot->quantity++;
                $existing->pivot->save();
            }
            else
                $order->products()->attach(Product::find($product['id']), ['quantity' => 1]);
        }

        return response($order->id, 200);
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

    public function make(Request $request)
    {
        $request->validate([
            'email' => 'email',
            'name' => 'required|string|min:1',
            'address' => 'required|string:min:6',
            'zip_code' => 'required|min:5|max:6',
            'coupon' => 'required',
            'cart' => 'required',
        ]);

        if(count($request->cart) > 0){
            $request->email = Auth::user()->email ?? $request->email;

            $order = new Order();
            $details = new OrderDetails($request->toArray());

            $order->save();
            $order->details()->save($details);

            Auth::check() && $order->user()->associate(Auth::user());

            $order->productsSet(Product::whereIn('id', $request->cart)->get());

            $order->appendCoupon($request->coupon);

            $order->save();

            return response([
                'paypalClientId' => config('services.paypal.client_id')
            ]);
        } else
            return response('Ordering failed', 400);
    }

    public function couponCheck($code){
        $coupon = Coupon::findByCode($code);

        if($coupon)
            return response($coupon, 200);
        else
            return response('Coupon does not exist', 422);
    }
}
