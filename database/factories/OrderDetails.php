<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\OrderDetails;
use Faker\Generator as Faker;

$factory->define(OrderDetails::class, function (Faker $faker) {
    return [
        'email' => $faker->email,
        'name' => $faker->name,
        'address' => $faker->address,
        'shipping_address' => $faker->secondaryAddress,
        'zip_code' => $faker->postcode
    ];
});
