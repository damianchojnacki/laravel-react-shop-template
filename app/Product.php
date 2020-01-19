<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $appends = ['final_price'];
    protected $with = ['type', 'image', 'discount'];

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public static function imageUpload($image)
    {
        $id = Image::imageUpload($image, 'products');

        return $id;
    }

    public function order()
    {
        return $this->belongsToMany(Order::class, 'order_product');
    }

    public function type()
    {
        return $this->belongsTo(ProductType::class);
    }

    public function discount()
    {
        return $this->hasOne(Discount::class);
    }

    public function getFinalPrice(){
        return $this->discount ? round($this->price - $this->price * ($this->discount->percent_off / 100), 2) : null;
    }

    public function getFinalPriceAttribute()
    {
        return $this->getFinalPrice();
    }
}
