<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
