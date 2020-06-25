<?php

namespace Tests\Feature;

use App\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->withoutExceptionHandling();

        $this->seed();
    }

    public function testProductHasPrice(){
        $product = factory(Product::class)->create();

        $this->assertArrayHasKey('price', $product->toArray());
    }

    public function testProductHasPriceOrigin(){
        $product = factory(Product::class)->create();

        $this->assertArrayHasKey('price_origin', $product->toArray());
    }

    public function testProductHasPriceFinal(){
        $product = factory(Product::class)->create();

        $this->assertArrayHasKey('price_final', $product->toArray());
    }

    public function testProductPriceIsNotEqualFinalPriceWhenHasDiscountAndEqualsWhenHasNot(){
        $product = factory(Product::class)->create();

        if($product->discount)
            $this->assertNotEquals($product->price, $product->price_final);
        else
            $this->assertEquals($product->price, $product->price_final);
    }

    public function testCartReturnsProducts()
    {
        $this->get("/api/products/cart/[1,2,4]")
            ->assertJsonCount(3)
            ->assertJsonStructure([
                [
                    'id',
                    'name',
                    'price_final',
                    'quantity',
                    'type' => [
                        'name'
                    ]
                ]
            ]);
    }
}
