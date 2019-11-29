<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use App\OrderStatus;
use App\User;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'user_id' => User::where('name', '!=', 'admin')->get()->random()->id,
        'status_id' => OrderStatus::all('id')->random()->id,
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
