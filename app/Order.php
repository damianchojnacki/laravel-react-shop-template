<?php

namespace App;

use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use UsesUuid;

    protected $guarded = ['uuid'];

    public function status(){
        return $this->belongsTo(Status::class);
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
