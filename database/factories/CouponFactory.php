<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Coupon;
use Faker\Generator as Faker;

$factory->define(Coupon::class, function (Faker $faker) {
    return [
        'code' => Coupon::genCode(),
        'title' => $faker->title,
        'percent_off' => $faker->numberBetween(2, 15),
    ];
});
