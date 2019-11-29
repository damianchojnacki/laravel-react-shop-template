<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;
use Bezhanov\Faker\Provider\Device;

$factory->define(Product::class, function (Faker $faker) {
    $faker->addProvider(new Device($faker));

    return [
        'name' => $faker->deviceModelName,
        'price' => $faker->randomFloat('2', 100, 1000),
        'created_at' => $faker->dateTimeBetween('-1 year', 'now')
    ];
});
