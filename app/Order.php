<?php

namespace App;

use App\Traits\UsesCoupon;
use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class Order extends Model{

    use UsesUuid, UsesCoupon;

    protected $guarded = [
        'id',
        'value',
    ];
    protected $appends = ['value'];

    protected static function boot(){
        parent::boot();

        static::addGlobalScope('order', function(Builder $builder){
            $builder->orderBy('created_at', 'DESC');
        });
    }

    public function status(){
        return $this->belongsTo(OrderStatus::class);
    }

    public function productsAdd($products){
        if(!$products instanceof Collection && !is_array($products))
            $products = [$products];

        $order_products = $this->products();

        foreach($products as $product)
            $order_products->attach($product->id, ['quantity' => $product->quantity ?? 1]);

        return $this->products();
    }

    public function products(){
        return $this->belongsToMany(Product::class, 'order_product')->withPivot('quantity');
    }

    public function productsRemove($products){
        if(!$products instanceof Collection && !is_array($products))
            $products = [$products];

        $order_products = $this->products();

        foreach($products as $product){
            if($order_products->get()->find($product->id)->pivot->quantity > ($product->quantity ?? 1)){
                $pivot = $order_products->find($product->id)->pivot;
                $pivot->quantity -= $product->quantity ?? 1;
                $pivot->save();
            }
            else
                $order_products->detach($product->id);
        }

        return $this->products();
    }

    public function productsSet($products){
        if(!$products instanceof Collection && !is_array($products))
            $products = [$products];

        $order_products = $this->products();

        $order_products->sync([]);

        foreach($products as $product)
            $order_products->attach($product->id, ['quantity' => $product->quantity ?? 1]);

        return $this->products();
    }

    public function getProductsCountAttribute(){
        $products = $this->products()->get();

        $count = 0;

        foreach($products as $product)
            $count += $product->pivot->quantity;

        return $count;
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function getValueAttribute(){
        $products = $this->products()->select('price')->get();

        $value = 0;

        foreach($products as $product)
            $value += $product->price * $product->pivot->quantity;

        if(self::isUsingCoupons())
            $value = $this->appendDiscount($value);

        return number_format($value, 2, '.', '');
    }

    public static function isUsingCoupons(){
        return in_array(UsesCoupon::class, class_uses(self::class));
    }

    public function details(){
        return $this->hasOne(OrderDetails::class);
    }

}
