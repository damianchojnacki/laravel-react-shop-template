<?php

namespace App;

use Inertia\Inertia;

class InertiaPage extends Inertia{

    public static function load($path){
        $page = substr($path, strrpos($path, '/') + 1);

        Inertia::share('app.page', $page);
    }

    public static function render($component, $props = []){
        self::load($component);

        return parent::render($component, $props);
    }
}
