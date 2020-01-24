<?php

use App\Discount;
use App\Product;
use Illuminate\Database\Seeder;

class DiscountsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::all()->random(5)->each(function($product){
            $product->discount()->save(factory(Discount::class)->make());
        });
    }
}
