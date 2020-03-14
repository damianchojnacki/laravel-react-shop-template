<?php

namespace Tests\Unit;

use App\Coupon;
use App\Order;
use App\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CouponTest extends TestCase{

    use RefreshDatabase;

    public function setUp(): void{
        parent::setUp();

        $this->seed();
    }

    public function testCouponCorrectlyAppliesDiscount(){
        $order = factory(Order::class)->create();
        $order->productsAdd(factory(Product::class, 3)->create());

        $coupon = factory(Coupon::class)->create();

        $value_correct = $coupon->discount($order->value);

        $order->appendCoupon($coupon);

        $this->assertEquals($value_correct, $order->value);
    }

    public function CouponCanBeAppliedToOrder(){
        $coupon = factory(Coupon::class)->create();

        $products = factory(Product::class, 3)->create();

        $this->put("/coupon", $coupon)
            ->assertSessionHas("order.coupon")
            ->assertSessionMissing('error');

        $order = Order::whereHas('details', function($query) use ($order_data){
            $query->where('email', $order_data['email']);
        })->first();

        $this->assertIsObject($order->coupon);
    }

    public function testCouponCanBeAdded(){
        $coupon = factory(Coupon::class)->create();

        $this->put("/coupon/$coupon->code")
            ->assertSessionHas("coupon.code", $coupon->code)
            ->assertSessionHas("coupon.percent_off", $coupon->percent_off)
            ->assertSessionHas('success')
            ->assertSessionMissing('error');
    }
}
