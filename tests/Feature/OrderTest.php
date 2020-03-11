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

    public function testCanOrderBeCreatedAndOverwritten()
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

        $order_id = Order::whereHas('details', function ($query) use($shipment_address) {
            $query->where('email', $shipment_address['email']);
        })->first()->id;

        $shipment_address['email'] = "john@yahoo.com";

        $this->withSession(['cart' => $products])
            ->post("/order", $shipment_address)
            ->assertRedirect()
            ->assertSessionHas("order.id")
            ->assertSessionMissing('error');

        $order_id_new = Order::whereHas('details', function ($query) use($shipment_address) {
            $query->where('email', $shipment_address['email']);
        })->first()->id;

        //check if not created new order
        $this->assertEquals($order_id, $order_id_new, 'Two others orders has been created!');
    }
}
