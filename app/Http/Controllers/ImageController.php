<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'img' => 'mimes:jpeg,jpg,png,gif|required|max:2024',
        ]);

        $publicId = Image::imageUpload($request->file('img'), 'products');
        $url = Image::getImageSrc($publicId);

        return response($url, 200);
    }
}
