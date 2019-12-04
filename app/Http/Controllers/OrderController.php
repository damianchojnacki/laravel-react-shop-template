<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Order;
use App\OrderStatus;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function __construct()
    {
        Auth::shouldUse('api');
    }

    public function index(){
        $orders = Order::with(['products', 'user.country'])->get();

        return response(OrderResource::collection($orders), 200);
    }

    public function recent(){
        $orders = Order::with('user.country')->whereHas('status', function($status){
            $status->where('name', 'preparing');
        })->orderBy('created_at', 'DESC')->get()->take(10);

        return response(OrderResource::collection($orders), 200);
    }

    public function statuses(){
        $statuses = OrderStatus::all();

        return response($statuses, 200);
    }

    public function show($id)
    {
        $order = Order::with(['products.image', 'status', 'user.country'])->findOrFail($id);

        return response(new OrderResource($order), 200);
    }
}
