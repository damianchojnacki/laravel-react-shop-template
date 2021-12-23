<?php

namespace App\Traits;

use App\Models\Coupon;

trait UsesCoupon
{
    public function coupon(){
        return $this->belongsTo(Coupon::class);
    }

    public function appendCoupon($coupon){
        $coupon && $this->coupon()->associate($coupon);
    }

    public function appendDiscount($value){
        return $this->coupon ? $this->coupon->discount($value) : $value;
    }
}
