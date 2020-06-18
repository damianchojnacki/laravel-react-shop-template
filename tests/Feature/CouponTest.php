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

    public function testCouponCanBeAppliedToOrder(){
        $coupon = factory(Coupon::class)->create();

        $this->put("/coupon", $coupon)
            ->assertSessionHas("order.coupon")
            ->assertSessionMissing('error');
    }

    public function testCouponCanBeAdded(){
        $coupon = factory(Coupon::class)->create();

        $this->withSession(['cart' => factory(Product::class, 5)])
            ->put("/coupon/$coupon->code")
            ->assertSessionHas("coupon.code", $coupon->code)
            ->assertSessionHas("coupon.percent_off", $coupon->percent_off)
            ->assertSessionHas('success')
            ->assertSessionMissing('error');
    }
}
