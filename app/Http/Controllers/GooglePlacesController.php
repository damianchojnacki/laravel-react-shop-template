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
            $response = config('app.debug') ? $e->getMessage() : "Problem with Google Places API.";
            return response($response, 500);
        }
    }
}
