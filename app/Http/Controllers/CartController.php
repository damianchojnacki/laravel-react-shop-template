<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Product;
use Illuminate\Support\Facades\Redirect;
use Session;

class CartController extends Controller
{
    public function add($id)
    {
        Cart::add(Product::find($id));

        \Session::flash('success', 'Product has been added to cart.');

        return Redirect::back();
    }

    public function remove($id)
    {
        Cart::remove(Product::find($id));

        Session::flash('success', 'Product has been removed.');

        return Redirect::back();
    }

    public function empty()
    {
        Session::remove('cart');

        return Redirect::back();
    }
}
