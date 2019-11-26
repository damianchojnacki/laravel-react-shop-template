<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;
use Bezhanov\Faker\Provider\Device;

$factory->define(Product::class, function (Faker $faker) {
    $faker->addProvider(new Device($faker));

    $processors = ['Intel Pentium', 'Intel Core i3', 'Intel Core i5', 'Intel Core i7', 'Intel Core i9'];
    $graphics = ['Intel Graphics 6000', 'Nvidia GTX 1060', 'Nvidia GTX 1660', 'Nvidia RTX 2070', 'Nvidia RTX 2080 Ti'];
    $rams = [4, 8, 16, 32];

    return [
        'name' => $faker->deviceModelName,
        'processor' => $faker->randomElement($processors),
        'graphic' => $faker->randomElement($graphics),
        'size' => rand(11, 17),
        'ram' => $faker->randomElement($rams),
        'price' => $faker->randomFloat('2', 300, 1200),
        'created_at' => $faker->dateTimeBetween('-1 year', 'now')
    ];
});
