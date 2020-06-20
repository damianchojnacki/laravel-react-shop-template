<?php

namespace App\Http\Controllers;

use App\Discount;
use App\Http\Resources\ProductResource;
use App\InertiaPage;
use App\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
    private $like = "like";

    public function __construct()
    {
        $this->like = config('database.default') == "pgsql" ? "ilike" : "like";
    }

    public function create(Request $request)
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

    public function search($name){
        $discountedProducts = Product::has('discount')->where('name', $this->like, "%$name%")->take(100)->get();

        return InertiaPage::render('admin/Discounts', [
            'discounts' => ProductResource::collection($discountedProducts),
        ]);
    }

    public function delete($id){
        Discount::findOrFail($id)->delete();

        return response('Discount has been deleted', 200);
    }
}
