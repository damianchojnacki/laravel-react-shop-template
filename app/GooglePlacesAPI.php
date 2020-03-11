<?php


namespace App;


use App\Exceptions\GooglePlacesException;

class GooglePlacesAPI
{
    public static function autocomplete($input)
    {
        $apiKey = config('services.google.places_key');

        $client = new \GuzzleHttp\Client();

        $request = $client->get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=$input&key=$apiKey&types=address");

        $content = json_decode($request->getBody()->getContents());

        if($content->status == "OK" || $content->status == "ZERO_RESULTS")
            return $content->predictions;
        else{
            throw new GooglePlacesException($content->error_message);
        }
    }
}
