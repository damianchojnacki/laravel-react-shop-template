<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_types')->insert([
            [
                'name' => 'cpu',
            ],
            [
                'name' => 'gpu',
            ],
            [
                'name' => 'hdd',
            ],
            [
                'name' => 'ssd',
            ],
        ]);
    }
}
