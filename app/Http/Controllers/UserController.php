<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        Auth::shouldUse('api');
    }

    public function index($page){
        $users = User::skip(($page - 1) * 10)->take(10)->get();

        return response(UserResource::collection($users), 200);
    }

    public function show($id)
    {
        $user = User::with('orders.status')->findOrFail($id);

        return response(new UserResource($user), 200);
    }

    public function search($email)
    {
        $user = User::where('email', 'like', "%$email%")->take(100)->get();

        return response(UserResource::collection($user), 200);
    }

    public function delete($id)
    {
        User::findOrFail($id)->delete();

        return response('Order has been deleted', 200);
    }
}
