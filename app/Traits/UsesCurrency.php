<?php

namespace App\Traits;

trait UsesCurrency
{
    public $baseCurrency = 'USD';

    public function getLatestRates($base){
        $client = new \GuzzleHttp\Client();

        $rates = \Cache::get("currency_rates_$base");

        if($rates)
            return $rates;
        else {
            $request = $client->get("https://api.exchangeratesapi.io/latest?base=$base");
            $rates = json_decode($request->getBody()->getContents())->rates;

            \Cache::put("currency_rates_$base", $rates, 3600);

            return $rates;
        }
    }

    public function convert($value, $target, $base = null){
        if($base == null) $base = $this->baseCurrency;

        if($target == $base)
            return $value;

        return round($value * $this->getLatestRates($base)->{$target}, 2);
    }
}
