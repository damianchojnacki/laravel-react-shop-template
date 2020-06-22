<?php

namespace App\Traits;

trait UsesCurrency
{
    public $baseCurrency = 'USD';

    public function getLatestRates(){
        $client = new \GuzzleHttp\Client();

        $rates = \Cache::get('currency_rates');

        if($rates)
            return $rates;
        else {
            $request = $client->get("https://api.exchangeratesapi.io/latest?base=$this->baseCurrency");
            $rates = json_decode($request->getBody()->getContents())->rates;

            \Cache::put('currency_rates', $rates, 3600);

            return $rates;
        }
    }

    public function convert($value, $target){
        return round($value * $this->getLatestRates()->{$target}, 2);
    }
}
