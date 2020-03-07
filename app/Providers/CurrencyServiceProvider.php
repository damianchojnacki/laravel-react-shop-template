<?php

namespace App\Providers;

use App\Currency;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class CurrencyServiceProvider extends ServiceProvider
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
        Inertia::share('currency', function () {
            !Session::exists("currency") && Session::put("currency", Currency::find(1));

            return Session::get("currency");
        });

        Inertia::share('currencies', function () {
            return Currency::all();
        });
    }
}
