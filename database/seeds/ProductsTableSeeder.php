<?php

use App\Discount;
use App\Image;
use App\Jobs\UploadImage;
use App\Product;
use App\ProductType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Generator as Faker;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $processor = ProductType::where('name', 'cpu')->first()->id;
        $graphic = ProductType::where('name', 'gpu')->first()->id;
        $hdd = ProductType::where('name', 'hdd')->first()->id;
        $ssd = ProductType::where('name', 'ssd')->first()->id;

        DB::table('products')->insert([
            [
                'name' => 'Intel Core i3',
                'type_id' => $processor,
                'price' => 129.90,
            ],
            [
                'name' => 'Intel Core i5',
                'type_id' => $processor,
                'price' => 199.90,
            ],
            [
                'name' => 'Intel Core i7',
                'type_id' => $processor,
                'price' => 329.90,
            ],
            [
                'name' => 'Intel Core i9',
                'type_id' => $processor,
                'price' => 489.90,
            ],
            [
                'name' => 'AMD Ryzen 3',
                'type_id' => $processor,
                'price' => 94.90,
            ],
            [
                'name' => 'AMD Ryzen 5',
                'type_id' => $processor,
                'price' => 124.90,
            ],
            [
                'name' => 'AMD Ryzen 7',
                'type_id' => $processor,
                'price' => 199.90,
            ],
            [
                'name' => 'Nvidia RTX 2060',
                'type_id' => $graphic,
                'price' => 329.90,
            ],
            [
                'name' => 'Nvidia RTX 2070',
                'type_id' => $graphic,
                'price' => 469.90,
            ],
            [
                'name' => 'Nvidia RTX 2080',
                'type_id' => $graphic,
                'price' => 560.90,
            ],
            [
                'name' => 'Radeon RX 590',
                'type_id' => $graphic,
                'price' => 179.90,
            ],
            [
                'name' => 'Radeon RX 5700 XT',
                'type_id' => $graphic,
                'price' => 409.90,
            ],
            [
                'name' => 'Radeon RX Vega 64',
                'type_id' => $graphic,
                'price' => 374.90,
            ],
            [
                'name' => 'Western digital BLUE 1TB',
                'type_id' => $hdd,
                'price' => 30.90,
            ],
            [
                'name' => 'Seagate 2TB',
                'type_id' => $hdd,
                'price' => 50.90,
            ],
            [
                'name' => 'Western digital RED 4TB',
                'type_id' => $hdd,
                'price' => 129.90,
            ],
            [
                'name' => 'Samsung EVO 500GB',
                'type_id' => $ssd,
                'price' => 99.90,
            ],
            [
                'name' => 'Intel NVME 660p 1TB',
                'type_id' => $ssd,
                'price' => 160.90,
            ],
        ]);

        if(in_array(config('app.env'), ['prod', 'local'])){
            Cloudder::deleteResourcesByPrefix('products');

            Product::all()->each(function($product) use($faker) {
                UploadImage::dispatch($product);

                $product->created_at = $faker->dateTimeBetween('-1 year', 'now');
                $product->updated_at = $product->created_at;
                $product->save();
            });
        }
    }
}
