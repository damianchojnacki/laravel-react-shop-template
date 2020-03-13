<?php

namespace App;

use App\Http\Resources\ProductResource;
use Illuminate\Database\Eloquent\Collection;

class Cart{

    public static function add($products){
        $cart = self::get();

        $duplicate = false;

        if(!$products instanceof Collection)
            $products = [$products];

        foreach($products as $product){
            foreach($cart as $item){
                if($item->id == $product->id){
                    $item->quantity++;
                    $duplicate = true;
                }
            }

            if(!$duplicate){
                $product->quantity = 1;
                \Session::push("cart", new ProductResource($product));
            }
            else
                self::set($cart);

            $duplicate = false;
        }

        return self::get();
    }

    public static function get(){
        return \Session::get('cart') ?? [];
    }

    public static function set($cart){
        \Session::put('cart', $cart);
    }

    public static function remove($products){
        $cart = self::get();

        if(!$products instanceof Collection)
            $products = [$products];

        foreach($products as $product){
            foreach($cart as $key => $value){
                if($value->id == (int) $product->id){
                    if($value->quantity == 1)
                        unset($cart[$key]);
                    else $cart[$key]->quantity--;
                }
            }
        }

        self::set(array_values($cart));

        return self::get();
    }

    public static function empty(){
        return \Session::remove('cart');
    }

    public static function isEmpty(){
        return empty(self::get());
    }

}
