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


Route::group([
    'name' => 'auth',
], function () {
    // public routes
    Route::post('login', 'AuthController@login')->name('auth.login');
    Route::post('register', 'AuthController@register')->name('auth.register');

    // private routes
    Route::middleware('auth:api')->group(function () {
        Route::get('user', 'AuthController@getUser')->name('auth.user');
        Route::post('logout', 'AuthController@logout')->name('auth.logout');
    });
});

Route::group([
    'name' => 'products',
], function () {
    Route::get('products', 'ProductController@index')->name('products');
    Route::get('products/{id}', 'ProductController@show')->name('products.show');
    Route::post('products', 'ProductController@store')->name('products.store');
    Route::put('products', 'ProductController@edit')->name('products.edit');
    Route::delete('products', 'ProductController@delete')->name('products.delete');
});

Route::group([
    'name' => 'charts',
    'middleware' => ['auth:api', 'admin']
], function () {
    Route::get('charts/products', 'ChartController@products')->name('chart.products');
    Route::get('charts/views', 'ChartController@views')->name('chart.views');
    Route::get('charts/views-unique', 'ChartController@viewsUnique')->name('chart.views-unique');
});