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
                'name_display' => 'Processors',
            ],
            [
                'name' => 'gpu',
                'name_display' => 'Graphic cards',
            ],
            [
                'name' => 'hdd',
                'name_display' => 'Hard disks',
            ],
            [
                'name' => 'ssd',
                'name_display' => 'SSD',
            ],
        ]);
    }
}
