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
    'name' => 'users',
], function () {
    Route::get('users/page/{page}', 'UserController@index')->name('users');
    Route::get('users/search/{id}', 'UserController@search')->name('users.search');
    Route::get('users/{id}', 'UserController@show')->name('users.show');
    Route::delete('users/{id}', 'UserController@delete')->name('users.delete');
});

Route::group([
    'name' => 'products',
], function () {
    Route::get('products/page/{page}', 'ProductController@index')->name('products');
    Route::get('products/search/{id}', 'ProductController@search')->name('products.search');
    Route::get('products/{id}', 'ProductController@show')->name('products.show');
    Route::post('products', 'ProductController@store')->name('products.store');
    Route::put('products', 'ProductController@edit')->name('products.edit');
    Route::delete('products/{id}', 'ProductController@delete')->name('products.delete');
});

Route::group([
    'name' => 'orders',
], function () {
    Route::get('orders/page/{page}', 'OrderController@index')->name('orders');
    Route::get('orders/recent', 'OrderController@recent')->name('orders.recent');
    Route::get('orders/statuses', 'OrderController@statuses')->name('orders.statuses');
    Route::get('orders/search/{id}', 'OrderController@search')->name('orders.search');
    Route::get('orders/{id}', 'OrderController@show')->name('orders.show');
    Route::delete('orders/{id}', 'OrderController@delete')->name('orders.delete');
});

Route::group([
    'name' => 'charts',
    'middleware' => ['auth:api', 'admin'],
], function () {
    Route::get('charts/orders', 'ChartController@orders')->name('chart.orders');
    Route::get('charts/orders/countries', 'ChartController@ordersCountries')->name('chart.orders.countries');
    Route::get('charts/orders/values', 'ChartController@ordersValues')->name('chart.orders.values');
    Route::get('charts/views', 'ChartController@views')->name('chart.views');
    Route::get('charts/views-unique', 'ChartController@viewsUnique')->name('chart.views-unique');
});

