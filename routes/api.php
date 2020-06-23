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
    Route::post('register', 'AuthController@register')->name('auth.register');

    Route::post('login', 'AuthController@login')->name('auth.login');
    Route::post('/login/google', 'AuthController@loginWithGoogle')->name('auth.google.login');
    Route::get('/login/google/callback', 'AuthController@handleProviderCallback')->name('auth.google.callback');

    Route::get('/google-client-id', 'AuthController@getGoogleClientId')->name('auth.google.client.id');

    // private routes
    Route::middleware('auth:api')->group(function () {
        Route::get('user', 'AuthController@getUser')->name('auth.user');
        Route::post('logout', 'AuthController@logout')->name('auth.logout');
    });
});

Route::group([
    'name' => 'users',
    'middleware' => ['auth:api', 'admin'],
], function () {
    Route::get('users/all/{page?}', 'UserController@index');
    Route::get('users/search/{id}', 'UserController@search');
    Route::get('users/{id}', 'UserController@show');
    Route::post('users', 'UserController@create');
    Route::put('users', 'UserController@edit');
    Route::delete('users/{id}', 'UserController@delete');
});

Route::group([
    'name' => 'products',
], function () {
    Route::get('products/all/{page?}/{category?}', 'ProductController@index');
    Route::get('products/search/{id}/{category?}', 'ProductController@search');
    Route::get('products/cart/{cart}', 'ProductController@cart');
    Route::get('products/discounted', 'ProductController@discounted');
    Route::get('products/{id}', 'ProductController@show');

    Route::middleware('auth:api')->group(function () {
        Route::post('products', 'ProductController@store');
        Route::put('products', 'ProductController@edit');
        Route::delete('products/{id}', 'ProductController@delete');
    });
});

Route::group([
    'name' => 'product-types',
], function () {
    Route::get('product-types', 'ProductTypeController@index');
});


Route::group([
    'name' => 'discounts',
], function () {
    Route::post('discounts', 'DiscountController@create');

    Route::middleware('auth:api')->group(function () {
        Route::delete('discounts/{id}', 'DiscountController@discountDelete');
    });
});

Route::group([
    'name' => 'orders',
], function () {
    Route::middleware('auth:api')->group(function () {
        Route::get('orders/all/{page}', 'OrderController@index');
        Route::get('orders/recent', 'OrderController@recent');
        Route::get('orders/statuses', 'OrderController@statuses');
        Route::get('orders/search/{id}', 'OrderController@search');
        Route::post('orders', 'OrderController@create');
        Route::put('orders', 'OrderController@edit');
        Route::delete('orders/{id}', 'OrderController@delete');
    });

    Route::post('order', 'OrderController@make');
    Route::get('orders/{id}', 'OrderController@show');
    Route::put("coupon/{code}", 'OrderController@couponCheck');
});

Route::group([
    'name' => 'charts',
    'middleware' => ['auth:api', 'admin'],
], function () {
    Route::get('charts/dynamic/{resource}/{group}/{range}', 'ChartController@dynamic');
    Route::get('charts/orders', 'ChartController@orders');
    Route::get('charts/orders/countries', 'ChartController@ordersCountries');
    Route::get('charts/orders/values', 'ChartController@ordersValues');
    Route::get('charts/views', 'ChartController@views');
    Route::get('charts/views-unique', 'ChartController@viewsUnique');
});

Route::group([
    'name' => 'countries',
], function () {
    Route::get('countries', 'CountryController@index');
});

Route::group([
    'name' => 'currency',
], function () {
    Route::get('currencies', 'CurrencyController@index');
});

Route::group([
    'name' => 'images',
    'middleware' => ['auth:api', 'admin'],
], function () {
    Route::post('images', 'ImageController@store');
});

Route::get('/google/places/{input}', 'GooglePlacesController')->middleware('throttle:200,1');
