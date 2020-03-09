<?php

namespace App\Http\Controllers;

use App\Currency;

class CurrencyController extends Controller
{
    public function change($iso){
        \Session::put('currency', Currency::where('iso', $iso)->first());

        return \Redirect::back();
    }
}
