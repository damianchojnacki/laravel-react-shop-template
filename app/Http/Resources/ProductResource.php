<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class ProductResource extends JsonResource
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
                'name' => $this->name,
                'price' => (float) $this->price,
                'type' => new ProductTypeResource($this->whenLoaded('type')),
                'image' => $this->whenLoaded('image'),
                'quantity' => $this->when($this->quantity, $this->quantity),
            ];
    }
}
