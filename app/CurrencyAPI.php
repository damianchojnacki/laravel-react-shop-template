<?php

namespace App;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class CurrencyAPI
{
    public bool $cache = true;

    public function omitCache(): self
    {
        $this->cache = false;

        return $this;
    }

    public function getCurrentRates(): Collection
    {
        if(!$this->cache){
            return $this->get();
        }

        return collect(Cache::remember('currency_rates', 3600, function (){
            return $this->get();
        }));
    }

    private function get(): Collection
    {
        return collect(Http::get('https://api.nbp.pl/api/exchangerates/tables/a/')->json())->pluck('rates')->flatten(1);
    }
}
