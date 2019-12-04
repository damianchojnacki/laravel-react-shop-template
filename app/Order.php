<?php

namespace App;

use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use UsesUuid;

    protected $guarded = ['id', 'value'];
    protected $appends = ['value'];

    public function status(){
        return $this->belongsTo(OrderStatus::class);
    }

    public function products(){
        return $this->belongsToMany(Product::class, 'order_product')->withPivot('quantity');
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function getValueAttribute()
    {
        return $this->products()->sum('price');
    }
}
