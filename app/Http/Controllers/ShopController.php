<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductResource;
use App\InertiaPage;
use App\Order;
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

        return InertiaPage::render('shop/Homepage', [
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

        return InertiaPage::render('shop/Products', [
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

        return InertiaPage::render('shop/Products', [
            'products' => ProductResource::collection($products),
            'category' => $category,
        ]);
    }

    public function login(){
        return InertiaPage::render('shop/Login', [
            'googleClientId' => config('services.google.client_id'),
        ]);
    }

    public function register(){
        return InertiaPage::render('shop/Register');
    }

    public function checkout(){
        return InertiaPage::render('shop/Checkout', [
            'paypalClientID' => config('services.paypal.client_id'),
            'order' => \Session::get('order') ?? [],
            'coupon' => \Session::get('coupon'),
        ]);
    }

    public function user(){
        return InertiaPage::render('shop/User');
    }

    public function userOrders(){
        $orders = Order::whereHas('user', function($query){
            return $query->where('email', \Auth::user()->email);
        })->with('status')->get();

        return InertiaPage::render('shop/User/Orders', [
            'orders' => OrderResource::collection($orders),
        ]);
    }

    public function userDiscounts(){
        return InertiaPage::render('shop/User/Discounts');
    }

    public function userSettings(){
        return InertiaPage::render('shop/User/Settings');
    }
}
