<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Product;
use Illuminate\Support\Facades\Redirect;
use Session;

class CartController extends Controller
{
    private $dupliacte = false;

    public function add($id){
        $cart = \Session::get("cart");

        foreach($cart as $product){
            if($product->id == (int) $id){
                $product->quantity++;
                $this->dupliacte = true;
            }
        }

        if(!$this->dupliacte){
            $product = Product::find($id);
            $product->quantity = 1;
            \Session::push("cart", new ProductResource($product));
        }
        else
            \Session::put("cart", $cart);

        \Session::flash('success', 'Product has been added to cart.');

        return Redirect::back();
    }

    public function remove($id){
        $cart = \Session::get("cart");

        foreach($cart as $key => $value){
            if($value->id == (int) $id){
                if($value->quantity == 1) unset($cart[$key]);
                else $cart[$key]->quantity--;
            }
        }

        \Session::put("cart", $cart);

        \Session::flash('success', 'Product has been removed.');

        return Redirect::back();
    }

    public function clear(){
        Session::remove('cart');

        return Redirect::back();
    }
}
