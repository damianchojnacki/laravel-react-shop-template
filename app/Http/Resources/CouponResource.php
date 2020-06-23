<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class CouponResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if(Auth::check() ?? Auth::user()->isAdmin())
            return parent::toArray($request);
        else
            return [
                'code' => $this->code,
                'percent_off' => $this->percent_off,
            ];
    }
}
