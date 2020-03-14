<?php

namespace App\Http\Controllers;

use App\Coupon;
use App\Flash;

class CouponController extends Controller{

    public function append($code){
        $coupon = Coupon::findByCode($code);

        if($coupon){
            \Session::put('coupon', $coupon);
            Flash::success('Coupon has been applied.');
        }
        else
            Flash::error('Wrong coupon code.');

        return \Redirect::back();
    }

    public function remove(){
        \Session::remove('coupon');
        Flash::success('Coupon has been removed.');

        return \Redirect::back();
    }

}
