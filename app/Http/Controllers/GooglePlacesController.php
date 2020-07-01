<?php

namespace App\Http\Controllers;

use App\GooglePlacesAPI;
use Cookie;

class GooglePlacesController extends Controller
{
    public function __invoke($input)
    {
        try{
            $addresses = GooglePlacesAPI::autocomplete($input, Cookie::get('lang'));

            return response($addresses, 200);
        } catch (\Exception $e){
            $response = config('app.debug') ? $e->getMessage() : "Google Places API Error";
            return response($response, 500);
        }
    }
}
