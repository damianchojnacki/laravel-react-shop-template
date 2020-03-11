<?php

namespace Tests\Feature;

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

    public function testCanProductBeAddedToCart()
    {
        $this->put("/cart/1")
            ->assertRedirect()
            ->assertSessionHas('cart')
            ->assertSessionMissing('error')
            ->assertSessionHas('success');

    }

    public function testCanProductBeRemovedFromCart()
    {
        $this->delete("/cart/1")
            ->assertRedirect()
            ->assertSessionHas('cart', [])
            ->assertSessionMissing('error')
            ->assertSessionHas('success');
    }

    public function testCanCartBeEmptied()
    {
        $this->delete("/cart")
            ->assertRedirect()
            ->assertSessionMissing('cart');
    }
}
