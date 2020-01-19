<?php

namespace App\Http\Controllers;

use App\Discount;
use App\Http\Resources\ProductResource;
use App\Image;
use App\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{

    private $like = "like";

    public function __construct()
    {
        Auth::shouldUse('api');

        $this->like = config('database.default') == "pgsql" ? "ilike" : "like";
    }

    public function index($page = null, $category = null)
    {
        if ($category && $page)
            $products = Product::whereHas('type', function ($q) use ($category) {
                $q->where('name', $category);
            })->skip(($page - 1) * 12)->take(12)->get();
        else if($page)
            $products = Product::skip(($page - 1) * 12)->take(12)->get();
        else
            $products = Product::all();

        return response(ProductResource::collection($products), 200);
    }

    public function all()
    {
        $products = Product::all();

        return response(ProductResource::collection($products), 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:64',
            'price' => 'required|numeric|min:1',
            'img' => 'required|string'
        ]);

        $product = new Product;
        $product->name = $request->input('name');
        $product->price = $request->input('price');

        $image = new Image();
        $image->url= $request->input('img');

        $product->image()->save($image);
        $product->save();

        return response('Product has been created', 200);
    }

    public function show($id)
    {
        $product = Product::with(['image', 'type'])->findOrFail($id);

        return response(new ProductResource($product), 200);

    }

    public function discountDelete($id)
    {
        Discount::findOrFail($id)->delete();

        return response('Discount has been deleted', 200);
    }

    public function search($name, $category = null)
    {
        if ($category)
            $product = Product::whereHas('type', function ($q) use ($category) {
                $q->where('name', $category);
            })->with(['type', 'image'])->where('name', $this->like, "%$name%")->take(100)->get();

        else
            $product = Product::with(['type', 'image'])->where('name', $this->like, "%$name%")->take(100)->get();

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

    public function cart($cart)
    {
        $cart = json_decode($cart);

        $quantity = [];

        foreach ($cart as $id) {
            isset($quantity[$id]) ? $quantity[$id]++ : $quantity[$id] = 1;
        }

        $products = Product::whereIn('id', $cart)->with(['type', 'image'])->get()->map(function ($product) use ($quantity) {
            $product->quantity = $quantity[$product->id];

            return $product;
        });

        return response(ProductResource::collection($products), 200);
    }

    public function discountAdd(Request $request)
    {

        $request->validate([
            'product_id' => 'required|integer',
            'percent_off' => 'required|integer|min:1|max:99',
            'ends' => 'required|date',
        ]);

        $discount = new Discount;
        $discount->percent_off = $request->input('percent_off');
        $discount->ends = Carbon::createFromDate($request->input('ends'));
        Product::findOrFail($request->input('product_id'))->discount()->save($discount);

        return response('Discount has been applied', 200);
    }
}
