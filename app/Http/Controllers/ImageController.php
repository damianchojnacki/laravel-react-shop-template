<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'img' => 'required|max:3070',
        ]);

        $path = Product::imageUpload($request->file('img'));
        $url = Storage::url($path);

        if($request->product_id)
            Product::findOrFail($request->product_id)->saveImage($path);

        return response([
            'src' => $url,
            'path' => $path,
        ], 200);
    }
}
