<?php

namespace App\Models;


use App\Traits\UsesCurrency;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpFoundation\File\File;

/**
 * @method static find($id)
 */
class Product extends Model{

    use UsesCurrency;

    protected $appends = [
        'price_origin',
        'price_final',
    ];

    protected $with = [
        'type',
        'image',
        'discount',
    ];

    public static function imageUpload(File $image){
        return Image::imageUpload($image, 'products');
    }

    public function saveImage($path){
        $this->image()->createOrUpdate(['path' => $path]);
    }

    public function getPriceFinalAttribute(){
        if($this->discount)
            $price_final = $this->price - $this->price * ($this->discount->percent_off / 100);
        else
            $price_final = $this->price;

        $currency = json_decode(\Cookie::get('currency'))->iso ?? $this->baseCurrency;

        if($currency !== $this->baseCurrency)
            $price_final = $this->convert($price_final, $currency);

        return number_format($price_final, 2, '.', '');
    }

    public function getPriceOriginAttribute(){
        $currency = json_decode(\Cookie::get('currency'))->iso ?? $this->baseCurrency;

        $price_origin = $currency !== $this->baseCurrency ? $this->convert($this->price, $currency) : $this->price;

        return number_format($price_origin, 2, '.', '');
    }

    public function image(){
        return $this->morphOne(Image::class, 'imageable');
    }

    public function order(){
        return $this->belongsToMany(Order::class, 'order_product');
    }

    public function type(){
        return $this->belongsTo(ProductType::class);
    }

    public function discount(){
        return $this->hasOne(Discount::class);
    }

}
