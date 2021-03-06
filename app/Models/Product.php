<?php

namespace App;

use App\Traits\UsesCurrency;
use Illuminate\Database\Eloquent\Model;

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

    public static function imageUpload($image){
        $id = Image::imageUpload($image, 'products');

        return $id;
    }

    public function saveImage($public_id){
        if($this->image)
            $this->image()->update(['public_id' => $public_id]);
        else
            $this->image()->create(['public_id' => $public_id]);
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
