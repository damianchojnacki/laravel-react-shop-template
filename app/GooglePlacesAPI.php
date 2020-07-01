<?php

namespace App;

use App\Exceptions\GooglePlacesException;
use Cookie;

class GooglePlacesAPI{

    public static function autocomplete($input, $language = "en"){
        $apiKey = config('services.google.places_key');

        $client = new \GuzzleHttp\Client();

        $request = $client->get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=$input&key=$apiKey&types=address&language=$language");

        $content = json_decode($request->getBody()->getContents());

        if($content->status == "OK" || $content->status == "ZERO_RESULTS")
            return $content->predictions;
        else{
            throw new GooglePlacesException($content->error_message);
        }
    }

    public static function searchById($id, $language = "en"){
        $apiKey = config('services.google.places_key');

        $client = new \GuzzleHttp\Client();

        $request = $client->get("https://maps.googleapis.com/maps/api/place/details/json?placeid=$id&key=$apiKey&types=address&language=$language");

        $content = json_decode($request->getBody()->getContents());

        if($content->status == "OK" || $content->status == "ZERO_RESULTS")
            return $content->result;
        else{
            throw new GooglePlacesException($content->error_message);
        }
    }

    public static function getCountry($id){
        $details = self::searchById($id);

        foreach($details->address_components as $component){
            if($component->types[0] == "country") return $component->short_name;
        }

        return null;
    }


}
