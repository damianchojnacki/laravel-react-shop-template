<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        Auth::shouldUse('api');
    }
    /**
     * Display a listing of the resource.
     *
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products = Product::with(['image', 'type'])->get();

        (!$request->user() || !$request->user()->isAdmin()) && $products = ProductResource::collection($products);

        return response($products, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, Request $request)
    {
        $product = Product::with(['image', 'type'])->find($id);

        (!$request->user() || !$request->user()->isAdmin()) && $product = new ProductResource($product);

        return response($product, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $product = $request->validate([
            'id' => 'integer',
            'name' => 'required|string|max:64',
            'price' => 'required|numeric|min:1',
        ]);

        $product = Product::find($request->input('id'));
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->save();

        return response('Product has been updated', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        //
    }
}
