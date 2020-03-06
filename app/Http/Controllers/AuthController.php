<?php

namespace App\Http\Controllers;

use App\Country;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\HttpKernel\Profiler\Profile;

class AuthController extends Controller {

    public function getUser (Request $request) {
        $response = new UserResource($request->user());

        return response($response, 200);
    }

    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            Auth::login($user);

            return response($user, 200);
        } else {
            \Session::flash('error', 'Incorrect email or password!');

            return response('Bad credentials', 422);
        }
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
            'country' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $user = new User();
        $user->email = $request['email'];
        $user->name = $request['name'];
        $user->password = Hash::make($request['password']);
        $user->country()->associate(Country::find($request['country']));
        $user->saveOrFail();

        Auth::login($user);

        \Session::flash('success', 'You have been successfully signed up.');

        return response(['user' => $user], 200);
    }

    public function logout() {
        Auth::logout();

        \Session::flash('success', 'You have been successfully logged out!');

        return \Redirect::back();
    }
}
