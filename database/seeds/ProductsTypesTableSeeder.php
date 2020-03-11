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
                'long' => 'Processors',
                'short' => 'CPUs',
            ],
            [
                'name' => 'gpu',
                'long' => 'Graphics cards',
                'short' => 'GPUs',
            ],
            [
                'name' => 'hdd',
                'long' => 'Hard disks',
                'short' => 'HDDs',
            ],
            [
                'name' => 'ssd',
                'long' => 'SSDs',
                'short' => 'SSDs',
            ],
        ]);
    }
}
