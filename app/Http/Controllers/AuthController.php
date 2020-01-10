<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpKernel\Profiler\Profile;

class AuthController extends Controller {

    public function getUser (Request $request) {
        $response = new UserResource($request->user());

        return response($response, 200);
    }

    public function login(Request $request) {

        $user = User::where('email', $request->email)->first();

        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['token' => $token];
                $status = 200;
            } else {
                $status = 422;
                $response = 'Incorrect email or password!';
            }
        } else {
            $response = 'Incorrect email or password!';
            $status = 422;
        }

        return response($response, $status);
    }

    public function socialLogin($social){
        if ($social == "facebook" || $social == "google")
            return Socialite::with($social)
                ->stateless()
                ->redirect();
        else
            return Socialite::with($social)->redirect();
    }

    public function handleProviderCallback($social){
        $userSocial = Socialite::with($social)->stateless()->user();

        $token = $userSocial->token;
        $user = User::firstOrNew(['email' => $userSocial->getEmail()]);

        if (!$user->id) {
            $user->fill([
                "name" => $userSocial->getName(),
                "password"=>Hash::make(Str::random()),
            ]);
            // Save user social
            $user->save();
        }

        $access_token = $user->createToken($token)->accessToken;

        return redirect()->to('/')->withCookies([Cookie::make('access_token', $access_token, 60, '/', null, false, false)]);
    }

    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $request['password'] = Hash::make($request['password']);
        $request['name'] = uniqid();
        $user = User::create($request->toArray());

        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token];

        return response($response, 200);
    }

    public function logout (Request $request) {
        $token = $request->user()->token();
        $token->revoke();

        $response = 'You have been succesfully logged out!';
        return response($response, 200);
    }
}
