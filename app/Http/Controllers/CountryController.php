<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function index(){
        $countries = Country::all();

        return response($countries, 200);
    }
}
