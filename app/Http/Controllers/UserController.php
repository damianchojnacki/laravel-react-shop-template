<?php

namespace App\Http\Controllers;

use App\Country;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        Auth::shouldUse('api');
    }

    public function index($page = null){
        if($page)
            $users = User::skip(($page - 1) * 12)->take(12)->get();
        else
            $users = User::all();

        return response(UserResource::collection($users), 200);
    }

    public function show($id)
    {
        $user = User::with(['orders.status'])->findOrFail($id);

        return response(new UserResource($user), 200);
    }

    public function search($email)
    {
        $user = User::where('email', 'like', "%$email%")->take(100)->get();

        return response(UserResource::collection($user), 200);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:64',
            'email' => 'required|email',
            'password' => 'required|min:8',
            'country' => 'required|numeric|min:1',
        ]);

        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('email'));
        $user->country()->associate(Country::findOrFail($request->input('country')));
        $user->save();

        return response($user->id, 200);
    }

    public function edit(Request $request)
    {
        $request->validate([
            'id' => 'integer',
            'name' => 'required|string|max:64',
            'email' => 'required|email',
            'country' => 'required|numeric|min:1',
        ]);

        $user = User::findOrFail($request->input('id'));
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->country()->associate(Country::findOrFail($request->input('country')));
        $user->save();

        return response('User has been updated', 200);
    }

    public function delete($id)
    {
        User::findOrFail($id)->delete();

        return response('Order has been deleted', 200);
    }
}
