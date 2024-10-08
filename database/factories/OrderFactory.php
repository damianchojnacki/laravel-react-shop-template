<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Order;
use App\Models\OrderStatus;
use App\Models\User;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'user_id' => User::where('name', '!=', 'admin')->get()->random()->id,
        'status_id' => OrderStatus::all('id')->random()->id,
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
