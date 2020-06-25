<?php

namespace Tests\Feature;

use App\Order;
use App\Product;
use App\Coupon;
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

    public function testSingleProductCanBeAddedToOrder(){
        $order = factory(Order::class)->create();

        $product = factory(Product::class)->create();

        $order->productsAdd($product);

        $this->assertCount(1, $order->products()->get());
    }

    public function testSingleProductCanBeRemovedFromOrder(){
        $order = factory(Order::class)->create();

        $product = factory(Product::class)->create();

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

        $order->productsAdd($products);

        $this->assertCount($num_of_products, $order->products()->get());
    }

    public function testMultipleProductsCanBeRemovedFromOrder(){
        $order = factory(Order::class)->create();

        $num_of_products = 5;

        $products = factory(Product::class, $num_of_products)->create();

        $order->productsAdd($products);

        $order->productsRemove($products->take(3));

        $this->assertCount(2, $order->products()->get());
    }

    public function testProductsCanBeAddedOneByOne(){
        $order = factory(Order::class)->create();

        $products = factory(Product::class, 2)->create();

        $order->productsAdd($products[0]);

        $this->assertCount(1, $order->products()->get());

        $order->productsAdd($products[1]);

        $this->assertCount(2, $order->products()->get());
    }

    public function testOrderCanBeCreatedAndOverwritten()
    {
        $products = Product::get()->take(5)->map(function($product){
            $product->quantity = 1;

            return $product;
        });

        $coupon = Coupon::find(1);

        $data = [
            'email' => 'john@gmail.com',
            'name' => 'John Smith',
            'address' => '132, My Street, New York, United States',
            'zip_code' => '12401',
            'coupon' => $coupon->code,
            'products' => $products
        ];

        $this->post("/api/order", $data)
            ->assertJsonStructure([
                'paypalClientId',
                'order'
            ]);

        $order = Order::whereHas('details', function ($query) use($data) {
            $query->where('email', $data['email']);
        })->first();

        $this->assertCount($products->count(), $order->products()->get());

        $take = 2;

        $data['email'] = "john@yahoo.com";
        $data['products'] = $products->take($take);

        $this->call('POST', "/api/order", $data, ['order' => json_encode($order)])
            ->assertJsonStructure([
                'paypalClientId',
                'order'
            ]);

        $order_new = Order::whereHas('details', function ($query) use($data) {
            $query->where('email', $data['email']);
        })->first();

        $this->assertCount($take, $order_new->products()->get());

        //check if new order have not been created
        $this->assertEquals($order->id, $order_new->id, 'Two other orders has been created!');
    }
}
