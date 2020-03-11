<?php

namespace Tests\Feature;

use App\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CartTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->seed();
    }

    public function CanProductBeAddedToCart()
    {
        $product = Product::find(1);

        $response = $this->put('/cart', $product->toArray());
    }
}
