<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FormatedModel extends Model{

    protected $casts = [
        'created_at' => 'date:d.m.Y',
        'ends' => 'datetime:d.m.Y H:m:s',
    ];

}
