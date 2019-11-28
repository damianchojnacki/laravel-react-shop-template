<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(ProductsTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(ViewsTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(StatusesTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(OrdersTableSeeder::class);
    }
}
