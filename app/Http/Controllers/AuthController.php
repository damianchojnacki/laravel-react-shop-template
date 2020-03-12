<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller {

    public function getUser (Request $request) {
        $response = new UserResource($request->user());

        return response($response, 200);
    }

    public function login(Request $request) {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password]))
            return response(['user' => new UserResource(Auth::user())], 200);
        else
            return response('Incorrect email or password.', 422);
    }

    public function loginWithGoogle(Request $request){
        $jwt = new \Firebase\JWT\JWT;
        $jwt::$leeway = 1;

        $client = new \Google_Client([
            'client_id' => config('services.google.client_id'),
            'jwt' => $jwt,
        ]);

        $userGoogle = $client->verifyIdToken($request->user_id);

        if ($userGoogle) {
            $user = User::firstOrNew(['email' => $userGoogle['email']]);

            if (!$user->id) {
                $user->fill([
                    "name" => $userGoogle['name'],
                    "password"=>Hash::make(Str::random()),
                ]);

                $user->save();
            }

            Auth::login($user);

            \Session::flash('success', 'You have been successfully singed in.');
        } else {
            \Session::flash('success', 'Sorry, we had a problem with signing you in. Try again or register.');
        }

        return redirect()->to('/');
    }

    public function register(Request $request) {

        $validator = Validator::make($request->all(), [
            'email'    => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $user = new User();
        $user->email = $request->email;
        $user->name = $request->name;
        $user->password = Hash::make($request->password);
        $user->saveOrFail();

        Auth::login($user);

        \Session::flash('success', 'You have been successfully signed up.');

        return response(['user' => new UserResource($user)], 200);
    }

    public function logout() {
        Auth::logout();

        \Session::flash('success', 'You have been successfully logged out!');

        return \Redirect::back();
    }
}
