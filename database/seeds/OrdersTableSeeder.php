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
        $products = $products = Product::all();

        factory(Order::class, 1000)->create()->each(function ($order) use($products) {
            foreach($products->random(rand(1, 5)) as $product){
                $order->products()->attach($product, ['quantity' => rand(1, 3)]);
            }
        });
    }
}
