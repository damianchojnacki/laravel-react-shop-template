<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Coupon extends Model{

    use SoftDeletes;

    public static function genCode(){
        $bytes = random_bytes(3);

        return bin2hex($bytes);
    }

    public static function findByCode($code){
        return self::where('code', $code)->first();
    }

    public function discount($total){
        return round($total - ($this->percent_off / 100) * $total, 2);
    }

    public function order(){
        return $this->hasOne(Order::class);
    }

}
