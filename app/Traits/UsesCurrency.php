<?php

namespace App\Traits;

use App\CurrencyAPI;

trait UsesCurrency
{
    public $baseCurrency = 'USD';

    public function convert($value, $target, $base = null){
        if($base == null) $base = $this->baseCurrency;

        if($target == $base)
            return $value;

        $rates = (new CurrencyAPI)->getCurrentRates();

        $value *= $rates->where('code', 'USD')->first()["mid"];

        if($target == "PLN"){
            return $value;
        }

        return round($value / $rates->where('code', $target)->first()["mid"], 2);
    }
}
