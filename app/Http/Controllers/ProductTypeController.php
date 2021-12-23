<?php

namespace App\Http\Controllers;

use App\Models\ProductType;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductTypeController extends Controller
{
    public function index()
    {
        $types = ProductType::all();

        return response($types, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:32',
        ]);

        $type = new ProductType();
        $type->name = Str::slug($request->input('name'));
        $type->name_display = $request->input('name');
        $type->save();

        return response("$type->name_display has been added to product types.", 200);
    }

    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'name' => 'required|string|max:32',
        ]);

        $type = ProductType::findOrFail($request->input('id'));
        $type->name = Str::slug($request->input('name'));
        $type->name_display = $request->input('name');
        $type->save();

        return response("$type->name_display has been added to product types.", 200);
    }

    public function delete($id)
    {
        ProductType::findOrFail($id)->delete();

        return response("Product type has been deleted.", 200);
    }
}
