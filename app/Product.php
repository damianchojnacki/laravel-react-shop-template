<?php

namespace App;

use App\Traits\UsesCurrency;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use UsesCurrency;

    protected $appends = ['price_final, price_origin'];
    protected $with = ['type', 'image', 'discount'];

    public function getPriceFinalAttribute()
    {
        if($this->discount)
            $price_final = round($this->price - $this->price * ($this->discount->percent_off / 100), 2);
        else
            $price_final = round($this->price, 2);

        $currency = \Session::get('currency')->iso;

        if($currency !== $this->baseCurrency) $price_final = $this->convert($price_final, $currency);

        return $price_final;
    }

    public function getPriceOriginAttribute()
    {
        $currency = \Session::get('currency')->iso;

        return $currency !== $this->baseCurrency ? $this->convert($this->price, $currency) : floatval($this->price);
    }

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
}
