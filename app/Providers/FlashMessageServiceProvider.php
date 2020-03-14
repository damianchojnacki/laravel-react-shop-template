<?php

namespace App\Providers;

use App\Flash;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class FlashMessageServiceProvider extends ServiceProvider
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
        Inertia::share('flash', function () {
            return [
                'success' => Flash::success(),
                'error' => Flash::error(),
            ];
        });
    }
}
