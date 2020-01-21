<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Discount;
use Faker\Generator as Faker;

$factory->define(Discount::class, function (Faker $faker) {
    return [
        'percent_off' => rand(1, 99),
        'ends' => $faker->dateTimeBetween('now', '+1 week'),
    ];
});
