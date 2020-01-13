<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{

    public function __construct()
    {
        Auth::shouldUse('api');
    }

    public function index($page, $category = null){
        $category ?

        $products = Product::whereHas('type', function($q) use($category){
            $q->where('name', $category);
        })->with(['type', 'image'])->skip(($page - 1) * 10)->take(10)->get() :

        $products = Product::with(['type', 'image'])->skip(($page - 1) * 10)->take(10)->get();

        return response(ProductResource::collection($products), 200);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        $product = Product::with(['image', 'type'])->findOrFail($id);

        return response(new ProductResource($product), 200);

    }

    public function search($name)
    {
        $product = Product::with('type')->where('name', 'like', "%$name%")->take(100)->get();

        return response(ProductResource::collection($product), 200);
    }

    public function edit(Request $request)
    {
        $request->validate([
            'id' => 'integer',
            'name' => 'required|string|max:64',
            'price' => 'required|numeric|min:1',
        ]);

        $product = Product::findOrFail($request->input('id'));
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->save();

        return response('Product has been updated', 200);
    }

    public function delete($id)
    {
        Product::findOrFail($id)->delete();

        return response('Product has been deleted', 200);
    }
}
