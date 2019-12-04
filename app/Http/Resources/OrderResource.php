<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class OrderResource extends JsonResource
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
                'id' => $this->id,
                'created_at' => $this->created_at,
                'value' => $this->value,
                'products' => ProductResource::collection($this->whenLoaded('products')),
                'user' => new UserResource($this->whenLoaded('user')),
            ];
    }
}
