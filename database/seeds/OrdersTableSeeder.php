<?php

use App\Order;
use App\Product;
use App\User;
use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Order::class, 50)->create()->each(function ($order) {
            $products = Product::all()->random(rand(1, 10));

            foreach($products as $product){
                $order->products()->attach($product, ['quantity' => rand(1, 3)]);
            }
        });
    }
}
