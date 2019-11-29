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
        $this->call(CountriesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ProductTypesTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(ViewsTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(OrderStatusesTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(OrdersTableSeeder::class);
    }
}
