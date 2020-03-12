<?php

namespace Tests\Feature;

use App\Order;
use App\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class OrderTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->seed();
    }

    public function testOrderCanBeCreatedAndOverwritten()
    {
        $shipment_address = [
            'email' => 'john@gmail.com',
            'name' => 'John Smith',
            'address' => '132, My Street, New York, United States',
            'zip_code' => '12401',
        ];

        $products = Product::get()->take(5)->map(function($product){
            $product->quantity = 1;

            return $product;
        });

        $this->withSession(['cart' => $products])
            ->post("/order", $shipment_address)
            ->assertRedirect()
            ->assertSessionHas("order.id")
            ->assertSessionMissing('error');

        $order = Order::whereHas('details', function ($query) use($shipment_address) {
            $query->where('email', $shipment_address['email']);
        })->first();

        $order_products = $order->products()->get()->map(function($product){
            unset($product->pivot);
            $product->quantity = 1;

            return $product;
        })->toArray();

        $this->assertEquals($order_products, $products->toArray());

        $shipment_address['email'] = "john@yahoo.com";

        $this->withSession(['cart' => $products->take(2)])
            ->post("/order", $shipment_address)
            ->assertRedirect()
            ->assertSessionHas("order.id")
            ->assertSessionMissing('error');

        $order_id_new = Order::whereHas('details', function ($query) use($shipment_address) {
            $query->where('email', $shipment_address['email']);
        })->first()->id;

        $order_products = $order->products()->get()->map(function($product){
            unset($product->pivot);
            $product->quantity = 1;

            return $product;
        })->toArray();

        $this->assertEquals($order_products, $products->take(2)->toArray());

        //check if new order have not been created
        $this->assertEquals($order->id, $order_id_new, 'Two others orders has been created!');
    }
}
