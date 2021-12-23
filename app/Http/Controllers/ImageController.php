<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'img' => 'required|max:3070',
        ]);

        $public_id = Product::imageUpload($request->file('img'));
        $url = Image::getImageSrc($public_id);

        if($request->product_id)
            Product::findOrFail($request->product_id)->saveImage($public_id);

        return response([
            'src' => $url,
            'publicId' => $public_id,
        ], 200);
    }
}
