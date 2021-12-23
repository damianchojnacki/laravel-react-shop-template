<?php

namespace App\Http\Controllers;

use App\Models\Discount;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'products' => 'required|array',
            'percent_off' => 'required|integer|min:1|max:99',
            'ends' => 'required|date',
        ]);

        foreach($request->products as $product){
            $discount = new Discount;
            $discount->percent_off = $request->input('percent_off');
            $discount->ends = Carbon::createFromDate($request->input('ends'));
            Product::findOrFail($product['id'])->discount()->save($discount);
        }

        return response('Discounts has been applied', 200);
    }

    public function delete($id)
    {
        Discount::findOrFail($id)->delete();

        return response('Discount has been deleted', 200);
    }
}
