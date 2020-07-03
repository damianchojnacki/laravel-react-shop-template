<?php

namespace App\Http\Controllers;

use App\Discount;
use App\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
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

    public function delete($id)
    {
        Discount::findOrFail($id)->delete();

        return response('Discount has been deleted', 200);
    }
}
