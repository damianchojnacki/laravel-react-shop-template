<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function image() {
        return $this->morphOne(Image::class, 'imageable');
    }

    public static function imageUpload($image){
        $id = Image::imageUpload($image, 'posts');

        return $id;
    }

    public function order(){
        return $this->belongsToMany(Order::class, 'order_product');
    }
}
