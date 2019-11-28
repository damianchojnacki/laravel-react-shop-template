<?php

use App\Image;
use App\Product;
use Illuminate\Database\Seeder;
use JD\Cloudder\Facades\Cloudder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = factory(Product::class, 20)->create();

        if(in_array(config('app.env'), ['dev', 'prod'])){
            Cloudder::deleteResourcesByPrefix('products');

            $products->each(function($post) {
                $image = new Image();
                $image->url= Product::imageUpload('https://lorempixel.com/640/640');
                $post->image()->save($image);
            });
        }
    }
}
