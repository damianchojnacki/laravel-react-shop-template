<?php

namespace Tests\Feature;

use App\Models\Coupon;
use App\Models\Order;
use App\Models\Product;
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

    public function testCorrectCouponPasses(){
        $coupon = factory(Coupon::class)->create();

        $this->put("/api/coupon/$coupon->code")
            ->assertJson([
                'code' => $coupon->code,
                'percent_off' => $coupon->percent_off
            ]);
    }

    public function testIncorrectCouponNotPass(){
        $this->put("/api/coupon/0")
            ->assertStatus(422);
    }
}
