<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Discount;
use Faker\Generator as Faker;

$factory->define(Discount::class, function (Faker $faker) {
    return [
        'percent_off' => rand(5, 50),
        'ends' => $faker->dateTimeBetween('now', '+1 week'),
    ];
});
