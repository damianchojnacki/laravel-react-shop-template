<?php

use App\Image;
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
        $processor = ProductType::where('name', 'processor')->first()->id;
        $graphic = ProductType::where('name', 'graphic')->first()->id;
        $hdd = ProductType::where('name', 'hdd')->first()->id;
        $ssd = ProductType::where('name', 'ssd')->first()->id;

        DB::table('products')->insert([
            [
                'name' => 'Intel Core i3',
                'type_id' => $processor,
                'price' => 129,
            ],
            [
                'name' => 'Intel Core i5',
                'type_id' => $processor,
                'price' => 199,
            ],
            [
                'name' => 'Intel Core i7',
                'type_id' => $processor,
                'price' => 329,
            ],
            [
                'name' => 'Intel Core i9',
                'type_id' => $processor,
                'price' => 489,
            ],
            [
                'name' => 'AMD Ryzen 3',
                'type_id' => $processor,
                'price' => 94,
            ],
            [
                'name' => 'AMD Ryzen 5',
                'type_id' => $processor,
                'price' => 124,
            ],
            [
                'name' => 'AMD Ryzen 7',
                'type_id' => $processor,
                'price' => 199,
            ],
            [
                'name' => 'Nvidia RTX 2060',
                'type_id' => $graphic,
                'price' => 329,
            ],
            [
                'name' => 'Nvidia RTX 2070',
                'type_id' => $graphic,
                'price' => 469,
            ],
            [
                'name' => 'Nvidia RTX 2080',
                'type_id' => $graphic,
                'price' => 560,
            ],
            [
                'name' => 'Radeon RX 590',
                'type_id' => $graphic,
                'price' => 179,
            ],
            [
                'name' => 'Radeon RX 5700 XT',
                'type_id' => $graphic,
                'price' => 409,
            ],
            [
                'name' => 'Radeon RX Vega 64',
                'type_id' => $graphic,
                'price' => 374,
            ],
            [
                'name' => 'Western digital BLUE 1TB',
                'type_id' => $hdd,
                'price' => 30,
            ],
            [
                'name' => 'Seagate 2TB',
                'type_id' => $hdd,
                'price' => 50,
            ],
            [
                'name' => 'Western digital RED 4TB',
                'type_id' => $hdd,
                'price' => 129,
            ],
            [
                'name' => 'Samsung EVO 500GB',
                'type_id' => $ssd,
                'price' => 99,
            ],
            [
                'name' => 'Intel NVME 660p 1TB',
                'type_id' => $ssd,
                'price' => 160,
            ],
        ]);

        Product::all()->each(function($product) use($faker) {
            $image = new Image();
            $image->url = '/images/products/' . $product->id . '.png';
            $product->image()->save($image);

            $product->created_at = $faker->dateTimeBetween('-1 year', 'now');
            $product->updated_at = $product->created_at;
            $product->save();
        });

    }
}
