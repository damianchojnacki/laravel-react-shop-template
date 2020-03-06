<?php

namespace App\Providers;

use App\ProductType;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class ProductTypeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::share('productsTypes', function () {
            return ProductType::all();
        });
    }
}
