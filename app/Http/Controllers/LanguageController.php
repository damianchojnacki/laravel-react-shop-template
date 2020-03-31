<?php

namespace App\Http\Controllers;

class LanguageController extends Controller
{
    public function change($iso){
        return redirect()->back()->cookie(
            'lang', $iso, time() + (10 * 365 * 24 * 60 * 60), null, null, false, false
        );
    }
}
