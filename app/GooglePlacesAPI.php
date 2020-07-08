<?php

namespace App;

use App;
use App\Exceptions\GooglePlacesException;
use Cookie;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class GooglePlacesAPI{

    private static $acceptedStatuses = [
        "OK",
        "ZERO_RESULTS"
    ];

    private static function passed($content){
        return in_array($content->status, self::$acceptedStatuses);
    }

    public static function autocomplete($input, $language = "en"){
        $apiKey = config('services.google.places_key');

        $sessionId = Cookie::get('googlePlacesSessionId') ?? null;

        $url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=$input&key=$apiKey&types=address&language=$language&sessiontoken=$sessionId";

        $response = Http::get($url)->object();

        if(App::environment() != "local" && config('app.debug'))
            self::log($url, $response);

        if(self::passed($response)){
            return $response->predictions;
        }
        else
            throw new GooglePlacesException($response->error_message);
    }

    public static function searchById($id, $language = "en"){
        $apiKey = config('services.google.places_key');

        $sessionId = Cookie::get('googlePlacesSessionId') ?? null;

        $url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=$id&key=$apiKey&types=address&language=$language&sessiontoken=$sessionId";

        $response = Http::get($url)->object();

        if(self::passed($response))
            return $response->result;
        else
            throw new GooglePlacesException($response->error_message);
    }

    public static function getCountry($id){
        $details = self::searchById($id);

        foreach($details->address_components as $component){
            if($component->types[0] == "country") return $component->short_name;
        }

        return null;
    }

    private static function log($url, $response){
        $info = [
            'info' => 'Request to Google Places API',
            'url' => $url,
            'returned records' => self::passed($response) ? count($response->predictions) : null,
            'exception' => !self::passed($response) ? $response->error_message : null,
        ];

        if(self::passed($response))
            Log::info('Google Places API Request Successful', $info);
        else
            Log::error('Google Places API Request Failed', $info);
    }
}
