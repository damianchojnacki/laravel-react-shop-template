<?php

namespace Tests\Feature;

use App\Currency;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CurrencyTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->seed();
    }

    public function testCurrencyChangePriceOfProducts(){
        $currency = Currency::find(1);

        $first = $this->call('GET', "/api/products/1", [], ['currency' => $currency])->content();

        $currency = Currency::find(2);

        $second = $this->call('GET', "/api/products/1", [], ['currency' => $currency])->content();

        $this->assertNotEquals($first, $second);
    }
}
