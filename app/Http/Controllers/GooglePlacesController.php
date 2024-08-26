<?php

namespace App\Http\Controllers;

use App\GooglePlacesAPI;
use Cookie;

class GooglePlacesController extends Controller
{
    public function __invoke($input, $sessionId = null)
    {
        $addresses = GooglePlacesAPI::autocomplete($input, Cookie::get('lang'));

        return response($addresses, 200);
    }
}
