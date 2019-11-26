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
        //config('app.env') !== 'testing' && Cloudder::deleteResourcesByPrefix('products');

        factory(Product::class, 100)->create()->each(function($post) {
            //$image = new Image();
            //$image->url= Product::imageUpload('https://lorempixel.com/640/640');
            //$post->image()->save($image);
        });
    }
}
