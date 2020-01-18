<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Discount;
use Faker\Generator as Faker;

$factory->define(Discount::class, function (Faker $faker) {
    return [
        'product_id' => \App\Product::doesntHave('discount')->get()->random(),
        'percent_off' => rand(1, 99),
        'ends' => $faker->dateTimeBetween('now', '+1 week'),
    ];
});
