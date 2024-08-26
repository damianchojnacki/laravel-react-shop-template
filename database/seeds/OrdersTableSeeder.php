<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\OrderDetails;
use App\Models\Product;
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
        $products = Product::all();

        factory(Order::class, 100)->create()->each(function ($order) use($products) {
            $order->details()->save(factory(OrderDetails::class)->make());

            foreach($products->random(rand(1, 5)) as $product){
                $order->products()->attach($product, ['quantity' => rand(1, 3)]);
            }
        });
    }
}
