<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected static function boot() {
        parent::boot();

        static::addGlobalScope('order', function (Builder $builder) {
            $builder->orderBy('name', 'desc');
        });
    }

    public function user(){
        return $this->hasOne(User::class);
    }
}
