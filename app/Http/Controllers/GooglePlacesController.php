<?php

namespace App\Http\Controllers;

class GooglePlacesController extends Controller
{
    public function __invoke($input)
    {
        $apiKey = config('services.google.places_key');

        $client = new \GuzzleHttp\Client();

        $request = $client->get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=$input&key=$apiKey&types=address");

        return response($request->getBody(), 200);
    }
}
