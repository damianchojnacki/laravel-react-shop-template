<?php

namespace App\Http\Controllers;

use App\Order;

class OrderController extends Controller
{
    public function index(){
        $orders = Order::with(['products', 'user'])->get();

        return $orders;
    }

    public function recent(){
        $orders = Order::with('user')->whereHas('status', function($status){
            $status->where('name', 'preparing');
        })->orderBy('created_at', 'DESC')->get()->take(10);

        return $orders;
    }
}
