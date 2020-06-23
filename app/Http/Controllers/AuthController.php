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

        return response($response);
    }

    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();

        if($user && Hash::check($request->password, $user->password)) {
            $token = $user->createToken('Laravel Password Grant Client')->accessToken;

            return response([
                'token' => $token,
            ]);
        }

        return response('Incorrect email or password!', 422);
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

            $token = $user->createToken('Laravel Password Grant Client')->accessToken;

            return response([
                'token' => $token,
            ]);
        } else {
            return response('Authentication failed.', 403);
        }
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

        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token];

        return response($response);
    }

    public function logout (Request $request) {
        $token = $request->user()->token();
        $token->revoke();

        $response = 'You have been succesfully logged out!';
        return response($response);
    }

    public function getGoogleClientId() {
        return response(config('services.google.client_id'));
    }
}
