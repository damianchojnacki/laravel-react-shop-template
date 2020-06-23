<?php

namespace App\Http\Controllers;

use App\GooglePlacesAPI;

class GooglePlacesController extends Controller
{
    public function __invoke($input)
    {
        try{
            $addresses = GooglePlacesAPI::autocomplete($input);

            return response($addresses, 200);
        } catch (\Exception $e){
            $response = config('app.debug') ? $e->getMessage() : "Google Places API Error";
            return response($response, 500);
        }
    }
}
