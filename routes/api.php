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

// public routes
Route::post('login', 'AuthController@login')->name('auth.login');
Route::post('register', 'AuthController@register')->name('auth.register');

// private routes
Route::middleware('auth:api')->group(function () {
    Route::get('user', 'AuthController@getUser')->name('auth.user');
    Route::post('logout', 'AuthController@logout')->name('auth.logout');
});

Route::middleware(['auth:api', 'admin'])->group(function () {
    Route::get('products', 'ProductController@index')->name('admin.products');
    Route::get('products/{id}', 'ProductController@show')->name('admin.products.show');
    Route::post('products', 'ProductController@store')->name('admin.products.store');
    Route::put('products', 'ProductController@edit')->name('admin.products.edit');
    Route::delete('products', 'ProductController@delete')->name('admin.products.delete');
});