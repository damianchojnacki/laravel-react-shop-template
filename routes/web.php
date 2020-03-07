<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/redirect/{social}','AuthController@socialLogin')->where('social','facebook|google');
Route::get('/login/{social}/callback','AuthController@handleProviderCallback')->where('social','facebook|google');

Route::group([
    'name' => 'shop',
], function () {
    Route::get("/", 'ShopController@homepage')->name('homepage');
    Route::get("products/all/{page?}/{category?}", 'ShopController@products')->name('products');
    Route::get('products/search/{id}/{category?}', 'ShopController@productsSearch');
    Route::get('login', 'ShopController@login')->name('login');
    Route::get('register', 'ShopController@register')->name('register');
    Route::get('checkout', 'ShopController@checkout')->name('checkout');
    Route::put('currency-change/{iso}', 'ShopController@currencyChange')->name('currency.change');
});

Route::group([
    'name' => 'cart',
], function () {
    Route::get("cart", 'CartController@get');
    Route::put("cart/{id}", 'CartController@add');
    Route::delete("cart/{id}", 'CartController@remove');
});

Route::group([
    'name' => 'auth',
], function () {
    // public routes
    Route::post('login', 'AuthController@login')->name('auth.login');
    Route::post('register', 'AuthController@register')->name('auth.register');

    // private routes
    Route::middleware('auth')->group(function () {
        Route::get('user', 'AuthController@getUser')->name('auth.user');
        Route::post('logout', 'AuthController@logout')->name('auth.logout');
    });
});

/*

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
    'middleware' => 'auth:api',
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

    Route::get('orders/{id}', 'OrderController@show');
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
    'name' => 'images',
    'middleware' => ['auth:api', 'admin'],
], function () {
    Route::post('images', 'ImageController@store');
});
