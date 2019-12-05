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

    public function index($page){
        $orders = Order::with(['products', 'user.country', 'status'])->skip(($page - 1) * 10)->take(10)->get();

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

        return response(new OrderResource($order), 200);
    }
}
