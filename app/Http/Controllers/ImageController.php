<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'img' => 'required|max:3070',
        ]);

        $publicId = Image::imageUpload($request->file('img'), 'products');
        $url = Image::getImageSrc($publicId);

        return response([
            'src' => $url,
            'id' => $publicId,
        ], 200);
    }
}
