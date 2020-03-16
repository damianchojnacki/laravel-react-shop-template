<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
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
                'name' => $this->name,
                'email' => $this->email,
                'orders' => OrderResource::collection($this->whenLoaded('orders')),
            ];
    }
}
