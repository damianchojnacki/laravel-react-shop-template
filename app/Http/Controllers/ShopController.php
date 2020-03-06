<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Product;
use Inertia\Inertia;

class ShopController extends Controller
{
    private $like = "like";

    public function __construct()
    {
        $this->like = config('database.default') == "pgsql" ? "ilike" : "like";
    }

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

    public function products($page = 1, $category = null){
        $page = (int) $page;

        if($category)
            $products = Product::whereHas('type', function ($q) use ($category) {
                $q->where('name', $category);
            })->take($page * 12)->get();
        else if($page)
            $products = Product::take($page * 12)->get();
        else
            $products = Product::all();

        return Inertia::render('shop/Products', [
            'products' => ProductResource::collection($products),
            'category' => $category,
            'page' => $page,
        ]);
    }

    public function productsSearch($name, $category = null){
        if ($category)
            $products = Product::whereHas('type', function ($q) use ($category) {
                $q->where('name', $category);
            })->with(['type', 'image'])->where('name', $this->like, "%$name%")->take(100)->get();
        else
            $products = Product::where('name', $this->like, "%$name%")->take(100)->get();

        return Inertia::render('shop/Products', [
            'products' => ProductResource::collection($products),
            'category' => $category,
        ]);
    }

    public function login(){
        return Inertia::render('shop/Login');
    }

    public function register(){
        return Inertia::render('shop/Register');
    }
}
