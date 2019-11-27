<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\DB;

class ViewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $views = 0;
        $views_unique = 0;
        $insert = array();

        $max = 365;

        for($i = 1; $i <= $max; $i++){
            $views += ((rand($i*($i/4), $i*($i/8)) + 10) * rand(-3, 4)) / 10 + 10;
            $views_unique += ((rand($i, $i + 5)) * rand(-3, 4)) / 10 + 10;

            array_push($insert, array(
                'views' => round($views / 20),
                'views_unique' => round($views_unique / 20),
                'created_at' => Carbon::now()->subDays($max)->addDays($i),
            ));
        }

        DB::table('views')->insert(array_slice($insert, 0, count($insert)/2));
        DB::table('views')->insert(array_slice($insert, count($insert)/2));
    }
}
