<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model{

    public $timestamps = false;

    public function order(){
        return $this->hasOne(Product::class);
    }

}
