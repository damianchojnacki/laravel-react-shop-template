<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use App\Models\ProductType;
use Bezhanov\Faker\Provider\Device;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    $faker->addProvider(new Device($faker));

    return [
        'name' => $faker->deviceModelName,
        'price' => $faker->randomFloat('2', 100, 1000),
        'type_id' => ProductType::all()->random()->id,
        'created_at' => $faker->dateTimeBetween('-1 year', 'now')
    ];
});
