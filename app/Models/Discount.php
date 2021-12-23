<?php

namespace App\Models;


use App\Models\FormatedModel;

class Discount extends FormatedModel{

    public function product(){
        return $this->belongsTo(Product::class);
    }

}
