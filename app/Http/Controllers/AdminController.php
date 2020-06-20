<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserResource;
use App\InertiaPage;
use App\Order;
use App\Product;
use App\User;

class AdminController extends Controller
{
    private $like = "like";

    public function __construct()
    {
        $this->like = config('database.default') == "pgsql" ? "ilike" : "like";
    }

    public function dashboard(){
        return InertiaPage::render('admin/Dashboard');
    }

    public function analytics(){
        return InertiaPage::render('admin/Analytics');
    }

    public static function getResource($name){
        $resources = [
            'products' => [
                'model' => Product::class,
                'resource' => ProductResource::class,
                'searchField' => 'name',
            ],
            'orders' => [
                'model' => Order::class,
                'resource' => OrderResource::class,
                'searchField' => 'id',
            ],
            'users' => [
                'model' => User::class,
                'resource' => UserResource::class,
                'searchField' => 'email',
            ],
        ];

        return $resources[$name];
    }

    public function resource($name){
        $resource = self::getResource($name);

        $data = $resource['resource']::collection($resource['model']::all());

        return InertiaPage::render('admin/Resource', [
            'name' => $name,
            'data' => $data,
        ]);
    }

    public function searchResource($name, $search){
        $resource = self::getResource($name);

        $data = $resource['model']::where($resource['searchField'], $this->like, "%$search%")->take(100)->get();

        return InertiaPage::render('admin/Resource', [
            'name' => $name,
            'data' => $resource['resource']::collection($data),
        ]);
    }
}
