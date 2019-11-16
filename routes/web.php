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

Route::redirect('/admin', '/admin/dashboard');
Route::view('/admin/{path?}', 'app');

Route::redirect('/', '/home');
Route::view('/{path?}', 'app');

