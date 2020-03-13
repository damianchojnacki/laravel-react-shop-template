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

        $this->withoutExceptionHandling();

        $this->seed();
    }

    public function testSingleProductCanBeAddedToOrder(){
        $order = factory(Order::class)->create();

        $product = factory(Product::class)->create();
        $product->quantity = rand(1, 5);

        $order->productsAdd($product);

        $this->assertCount(1, $order->products()->get());
    }

    public function testSingleProductCanBeRemovedFromOrder(){
        $order = factory(Order::class)->create();

        $product = factory(Product::class)->create();
        $product->quantity = 1;

        $order->productsAdd($product);
        $order->productsRemove($product);

        $this->assertCount(0, $order->products()->get());
    }

    public function testProductQuantityAddedToOrderEqualsActual(){
        $order = factory(Order::class)->create();

        $product = factory(Product::class)->create();
        $product->quantity = rand(1, 5);

        $order->productsAdd($product);

        $this->assertEquals($product->quantity, $order->products()->first()->pivot->quantity);
    }

    public function testProductQuantityRemovedFromOrderEqualsActual(){
        $order = factory(Order::class)->create();

        $product = factory(Product::class)->create();
        $product->quantity = 5;

        $order->productsAdd($product);

        $product->quantity = 3;
        $order->productsRemove($product);

        $this->assertEquals(2, $order->products()->first()->pivot->quantity);
    }

    public function testMultipleProductsCanBeAddedToOrder(){
        $order = factory(Order::class)->create();

        $num_of_products = 5;

        $products = factory(Product::class, $num_of_products)->create();
        $products->map(function($product){
            $product->quantity = rand(1, 5);
        });

        $order->productsAdd($products);

        //assert number of products
        $this->assertCount($num_of_products, $order->products()->get());

        //assert quantity
        $this->assertEquals($products->only('quantity'), $order->products()->get()->only('pivot.quantity'));
    }

    public function testProductsCanBeAddedOneByOne(){
        $order = factory(Order::class)->create();

        $products = factory(Product::class, 2)->create();
        $products->map(function($product){
            $product->quantity = rand(1, 5);
        });

        $order->productsAdd($products[0]);

        $this->assertCount(1, $order->products()->get());

        $order->productsAdd($products[1]);

        $this->assertCount(2, $order->products()->get());
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

        $this->assertCount($products->count(), $order->products()->get());

        $shipment_address['email'] = "john@yahoo.com";

        $take = 2;

        $this->withSession(['cart' => $products->take($take)])
            ->post("/order", $shipment_address)
            ->assertRedirect()
            ->assertSessionHas("order.id")
            ->assertSessionMissing('error');

        $order_new = Order::whereHas('details', function ($query) use($shipment_address) {
            $query->where('email', $shipment_address['email']);
        })->first();

        $this->assertCount($take, $order_new->products()->get());

        //check if new order have not been created
        $this->assertEquals($order->id, $order_new->id, 'Two other orders has been created!');
    }
}
