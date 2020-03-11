<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->seed();
    }

    private function login(){
        $credentials = [
            'email' => 'user@test.com',
            'password' => '12345678',
        ];

        factory(User::class)->create([
            'email' => $credentials['email'],
            'password' => bcrypt($credentials['password'])
        ]);

        return $this->post('/login', $credentials);
    }

    public function testUserCanRegister()
    {
        $response = $this->post('/register', [
            'name' => 'John Smith',
            'email' => 'user@test.com',
            'password' => '12345678',
            'password_confirmation' => '12345678',
        ]);

        $response->assertJson([
            'user' => true
        ]);

        $this->assertAuthenticated();
    }

    public function testUserCanLogin()
    {
        $response = $this->login();

        $response->assertJson([
            'user' => true
        ]);

        $this->assertAuthenticated();
    }

    public function testUserCanLogout()
    {
        $this->login();

        $this->assertAuthenticated();

        $this->post('/logout');

        $this->assertGuest();
    }

    public function testAdminAuthenticatesAsAdmin()
    {
        $user = User::where('is_admin', true)->first();

        $this->assertIsObject($user);

        Auth::login($user);

        $this->assertTrue(Auth::user()->isAdmin());
    }

    public function testUserIsNotAdmin()
    {
        $this->login();

        $this->assertFalse(Auth::user()->isAdmin());
    }
}
