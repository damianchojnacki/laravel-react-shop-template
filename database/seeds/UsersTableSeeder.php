<?php

use App\User;
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
        ]);

        factory(User::class)->create([
            'email' => 'user@gmail.com',
            'name' => 'user',
            'password' => Hash::make('user'),
        ]);

        Artisan::call('passport:install');
    }
}
