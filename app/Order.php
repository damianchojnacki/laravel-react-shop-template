<?php

namespace App;

use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use UsesUuid;

    protected $guarded = ['id', 'value'];
    protected $appends = ['value'];

    protected static function boot()
    {
        parent::boot();

        // Order by created_at DESC
        static::addGlobalScope('order', function (Builder $builder) {
            $builder->orderBy('created_at', 'DESC');
        });
    }

    public function status(){
        return $this->belongsTo(OrderStatus::class);
    }

    public function products(){
        return $this->belongsToMany(Product::class, 'order_product')->withPivot('quantity');
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

    public function getValueAttribute()
    {
        $products = $this->products()->select('price')->get();

        $value = 0;

        foreach($products as $product)
            $value += $product->price * $product->pivot->quantity;

        return number_format($value, 2, '.', '');
    }
}
