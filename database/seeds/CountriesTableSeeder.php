<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')->insert([
            [
                'name' => 'USA',
            ],
            [
                'name' => 'UK',
            ],
            [
                'name' => 'Poland',
            ],
            [
                'name' => 'Germany',
            ],
            [
                'name' => 'France',
            ],
            [
                'name' => 'Czech Republic',
            ],
            [
                'name' => 'Russia',
            ],
        ]);
    }
}
