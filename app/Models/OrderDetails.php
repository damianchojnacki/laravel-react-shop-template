<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderDetails extends Model{

    protected $fillable = [
        'email',
        'name',
        'address',
        'shipping_address',
        'zip_code',
    ];

    public function order(){
        return $this->belongsTo(Order::class);
    }

}
