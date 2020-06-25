<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
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

        return $this->post('/api/login', $credentials);
    }

    public function testUserCanRegister()
    {
        $response = $this->post('/api/register', [
            'name' => 'John Smith',
            'email' => 'user@test.com',
            'password' => '12345678',
            'password_confirmation' => '12345678',
        ]);

        $response->assertJson([
            'token' => true
        ]);
    }

    public function testUserCanLogin()
    {
        $response = $this->login();

        $response->assertJson([
            'token' => true
        ]);
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
        $user = User::where('is_admin', false)->first();

        $this->assertIsObject($user);

        Auth::login($user);

        $this->assertFalse(Auth::user()->isAdmin());
    }
}
