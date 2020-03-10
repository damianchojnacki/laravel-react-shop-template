<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PagesVisibleTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->seed();
    }

    public function testUserCanViewHomepage()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function testUserCanViewProducts()
    {
        $response = $this->get('/products/all');

        $response->assertStatus(200);
    }

    public function testUserCanViewLogin()
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }

    public function testUserCanViewRegister()
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }
}
