<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Shipment extends Model
{
    public $timestamps = false;

    public function currency(){
        return $this->belongsTo(Currency::class);
    }
}
