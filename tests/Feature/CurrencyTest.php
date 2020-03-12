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

    public function testCurrencyCanBeChanged(){
        $wantedCurrency = Currency::find(1);

        $this->put("/currency/$wantedCurrency->iso")
            ->assertSessionHas('currency', $wantedCurrency);
    }
}
