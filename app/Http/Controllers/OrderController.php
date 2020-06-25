<?php

namespace App\Http\Controllers;

use App\Coupon;
use App\Http\Resources\CouponResource;
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
        $orders = Order::skip(($page - 1) * 10)->take(10)->get();

        return response(OrderResource::collection($orders), 200);
    }

    public function recent(){
        $orders = Order::whereHas('status', function($status){
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
        $order = Order::with('products.image')->findOrFail($id);

        if(!Auth::user()->isAdmin() && Auth::user()->id != $order->user->id)
            return response("You are not authorized to see this order.", 401);

        return response(new OrderResource($order), 200);
    }

    public function search($id)
    {
        $order = Order::where('id', 'like', "%$id%")->take(100)->get();

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
            'email' => 'required|email',
            'name' => 'required|string|min:1',
            'address' => 'required|string|min:6',
            'zip_code' => 'required|min:5|max:6',
            'date' => 'date',
        ]);

        $order = new Order();
        $request->exists('date') && $order->created_at = Carbon::createFromDate($request->date);
        $order->status()->associate(OrderStatus::findOrFail($request->status));

        $user = User::where('email', $request->email)->first();

        if($user)
            $order->user()->associate($user);

        $details = new OrderDetails($request->toArray());

        $order->save();
        $order->details()->save($details);

        $order->productsSet($request->products);

        return response($order->id, 200);
    }

    public function edit(Request $request)
    {
        $request->validate([
            'id' => 'uuid',
            'status' => 'required|min:1|max:4',
            'products' => 'required|array',
            'email' => 'required|email',
            'name' => 'required|string|min:1',
            'address' => 'required|string|min:6',
            'zip_code' => 'required|min:5|max:6',
        ]);

        $order = Order::findOrFail($request->id);
        $order->status()->associate(OrderStatus::findOrFail($request->status));
        $order->details()->update($request->only(['email', 'name', 'address', 'zip_code']));

        $user = User::where('email', $request->email)->first();

        if($user)
            $order->user()->associate($user);

        $order->productsSet($request->products);

        $order->save();

        return response('Order has been updated', 200);
    }

    public function make(Request $request)
    {
        $request->validate([
            'email' => 'email',
            'name' => 'required|string|min:1',
            'address' => 'required|string|min:6',
            'zip_code' => 'required|min:5|max:6',
            'coupon' => 'max:12',
            'products' => 'required',
        ]);

        if(count($request->products) > 0){
            $request->email = Auth::user()->email ?? $request->email;

            $order = Order::find(\Cookie::get('order_id'));

            if($order){
                $order->details()->update($request->except('terms'));
            } else {
                $order = new Order();
                $details = new OrderDetails($request->toArray());

                $order->save();
                $order->details()->save($details);
            }

            Auth::check() && $order->user()->associate(Auth::user());

            $order->productsSet($request->products);

            $order->appendCoupon(Coupon::findByCode($request->coupon));

            $order->save();

            return response([
                'order' => $request->except(['terms', 'products', 'coupon']),
                'paypalClientId' => config('services.paypal.client_id')
            ]);
        } else
            return response('Ordering failed', 400);
    }

    public function couponCheck($code){
        $coupon = Coupon::findByCode($code);

        if($coupon)
            return response(new CouponResource($coupon), 200);
        else
            return response('Coupon does not exist', 422);
    }
}
