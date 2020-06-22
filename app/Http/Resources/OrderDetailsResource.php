<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class OrderDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if(Auth::check() && Auth::user()->isAdmin())
            return parent::toArray($request);
        else
            return [
                'email' => $this->email,
                'name' => $this->name,
                'address' => $this->address,
                'zip_code' => $this->zip_code,
            ];
    }
}
