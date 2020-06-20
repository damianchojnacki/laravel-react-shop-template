<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Image;
use App\InertiaPage;
use App\Product;
use App\ProductType;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    private $like = "like";

    public function __construct()
    {
        $this->like = config('database.default') == "pgsql" ? "ilike" : "like";
    }

    public function search($name){
        $products = Product::where('name', $this->like, "%$name%")->take(100)->get();

        return InertiaPage::render('admin/Resource', [
            'data' => ProductResource::collection($products),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:64',
            'price' => 'required|numeric|min:1',
            'img' => 'required|string',
            'type' => 'required|numeric|min:1',
        ]);

        $product = new Product;
        $product->name = $request->input('name');
        $product->price = $request->input('price');

        $type = ProductType::findOrFail($request->input('type'));
        $product->type()->associate($type);
        $product->save();

        $image = new Image();
        $image->url= $request->input('img');
        $product->image()->save($image);

        return response($product->id, 200);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);

        return response(new ProductResource($product), 200);

    }

    public function edit(Request $request)
    {
        $request->validate([
            'id' => 'integer',
            'name' => 'required|string|max:64',
            'price' => 'required|numeric|min:1',
            'type' => 'required|numeric|min:1',
        ]);

        $product = Product::findOrFail($request->input('id'));
        $product->name = $request->input('name');
        $product->price = $request->input('price');

        $type = ProductType::findOrFail($request->input('type'));
        $product->type()->associate($type);

        $product->save();

        return response('Product has been updated', 200);
    }

    public function delete($id)
    {
        Product::findOrFail($id)->delete();

        return response('Product has been deleted', 200);
    }

    public function cart($cart)
    {
        $cart = json_decode($cart);

        $quantity = [];

        foreach ($cart as $id)
            isset($quantity[$id]) ? $quantity[$id]++ : $quantity[$id] = 1;

        $products = Product::whereIn('id', $cart)->get()->map(function ($product) use ($quantity) {
            $product->quantity = $quantity[$product->id];

            return $product;
        });

        return response(ProductResource::collection($products), 200);
    }
}
