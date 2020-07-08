<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;

class LogController extends Controller
{
    public function sentry(){
        if(App::environment() != "local" && config('app.debug'))
            return response(config('services.sentry.react.dsn'));
        else
            return response('Logging services disabled during development.', 202);
    }

    public function logRocket(){
        if(App::environment() != "local" && config('app.debug'))
            return response(config('services.logrocket.app_id'));
        else
            return response('Logging services disabled during development.', 202);
    }
}
