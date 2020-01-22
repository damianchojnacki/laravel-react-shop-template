<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductTypesTableSeeder extends Seeder
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
                'short' => 'CPU\'s',
            ],
            [
                'name' => 'gpu',
                'long' => 'Graphic cards',
                'short' => 'GPU\'s',
            ],
            [
                'name' => 'hdd',
                'long' => 'Hard disks',
                'short' => 'HDD\'s',
            ],
            [
                'name' => 'ssd',
                'long' => 'SSD\'s',
                'short' => 'SSD\'s',
            ],
        ]);
    }
}
