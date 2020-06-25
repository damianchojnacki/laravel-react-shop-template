<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ViewTest extends TestCase
{

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

    /*
    public function testUserCantViewTelescope()
    {
        $response = $this->get('/telescope');

        $response->assertStatus(403);
    }
    

    public function testAdminCanViewTelescope()
    {
        $user = User::where('is_admin', true)->first();

        \Auth::login($user);

        $response = $this->get('/telescope');

        $response->assertStatus(200);
    }
    */
}
