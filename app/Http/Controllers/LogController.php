<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogController extends Controller
{
    public function sentry(){
        return response(config('services.sentry.react.dsn'));
    }

    public function logRocket(){
        return response(config('services.logrocket.app_id'));
    }
}
