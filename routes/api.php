<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/google-places/{input}', 'GooglePlacesController')->middleware('throttle:200,1');
Route::put('currency-change/{iso}', 'CurrencyController@change')->name('currency.change');
