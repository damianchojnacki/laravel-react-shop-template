<?php

namespace App\Http\Controllers;

class CurrencyController extends Controller
{
    public static function index(){
        $currencies = [
            [
                "iso" => "USD",
                "symbol" => "$",
            ],
            [
                "iso" => "EUR",
                "symbol" => "€",
            ],
            [
                "iso" => "PLN",
                "symbol" => "zł",
            ],
        ];

        return response($currencies);
    }
}
