<?php

namespace App\Providers;

use App\ProductType;
use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if(config('app.env') != 'local') URL::forceScheme('https');
        Resource::withoutWrapping();

        Inertia::share('app', function () {
            return [
              'name' => config('app.name'),
            ];
        });
    }
}
