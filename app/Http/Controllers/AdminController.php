<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\InertiaPage;
use App\Product;

class AdminController extends Controller
{
    public function dashboard(){
        return InertiaPage::render('admin/Dashboard');
    }

    public function resource($name){

        return InertiaPage::render('admin/Resource', [
            'name' => $name,
        ]);
    }
}
