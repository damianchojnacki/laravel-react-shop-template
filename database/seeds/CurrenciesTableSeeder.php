<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrenciesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('currencies')->insert([
            [
                'iso' => 'USD',
                'symbol' => '$',
            ],
            [
                'iso' => 'EUR',
                'symbol' => '€',
            ],
            [
                'iso' => 'GBP',
                'symbol' => '£',
            ],
            [
                'iso' => 'PLN',
                'symbol' => 'zł',
            ],
        ]);
    }
}
