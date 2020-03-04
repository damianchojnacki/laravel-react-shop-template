<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Product;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function homepage(){
        $productsWithDiscount = Product::has('discount')
            ->take(5)
            ->get()
            ->sortByDesc(function ($product) {
                return $product->discount->percent_off;
            });

        return Inertia::render('shop/Home', [
            'specialOffer' => new ProductResource($productsWithDiscount->shift()),
            'productsDiscounted' => ProductResource::collection($productsWithDiscount),
        ]);
    }
}
