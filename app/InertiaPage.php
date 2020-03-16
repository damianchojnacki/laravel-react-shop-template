<?php

namespace App;

use Inertia\Inertia;

class InertiaPage{

    public static function load($path){
        $page = substr($path, strrpos($path, '/') + 1);

        Inertia::share('app.page', $page);

        return $path;
    }

}
