<?php

namespace App;

class Flash{

    public static function error($message = null){
        if($message)
            \Session::flash('error', $message);

        return \Session::get('error');
    }

    public static function success($message = null){
        if($message)
            \Session::flash('success', $message);

        return \Session::get('success');
    }

}
