<?php

use Illuminate\Database\Seeder;
use App\Discount;

class DiscountsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Discount::class, 5)->create();
    }
}
