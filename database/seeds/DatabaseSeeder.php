<?php

namespace Database\Seeders;

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
        $this->call(CurrenciesTableSeeder::class);
        $this->call(ShipmentsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ProductsTypesTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(DiscountsTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(CouponsTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(ViewsTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(OrdersStatusesTableSeeder::class);
        config('app.env') !== 'prod' && $this->call(OrdersTableSeeder::class);
    }
}
