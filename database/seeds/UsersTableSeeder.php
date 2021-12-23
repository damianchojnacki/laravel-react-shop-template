<?php

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create([
            'email' => 'admin@gmail.com',
            'name' => 'admin',
            'password' => Hash::make('admin'),
            'is_admin' => true,
        ]);

        factory(User::class)->create([
            'email' => 'user@gmail.com',
            'name' => 'user',
            'password' => Hash::make('user'),
        ]);

        factory(User::class, 10)->create();

        Artisan::call('passport:install');
    }
}
