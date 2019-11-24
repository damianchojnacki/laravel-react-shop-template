<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
        return [
            'name' => $this->name,
            'processor' => $this->processor,
            'graphic' => $this->graphic,
            'size' => $this->size,
            'ram' => $this->ram,
            'price' => $this->price,
        ];
    }
}
