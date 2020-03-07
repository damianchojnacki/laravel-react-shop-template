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
                'price_origin' => $this->price_origin,
                'price_final' => $this->price_final,
                'type' => new ProductTypeResource($this->whenLoaded('type')),
                'image' => new ImageResource($this->whenLoaded('image')),
                'discount' => new DiscountResource($this->whenLoaded('discount')),
                'quantity' => $this->when($this->quantity, $this->quantity),
            ];
    }
}
