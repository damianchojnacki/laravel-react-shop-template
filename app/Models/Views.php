<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Views extends Model{

    protected $table = 'views';

    public static function getViews(){
        return [
            'day'   => [
                'views'  => self::getViewsDay(),
                'change' => self::getChangeDay(),
            ],
            'month' => [
                'views'  => self::getViewsMonth(),
                'change' => self::getChangeMonth(),
            ],
            'all'   => self::getViewsAll(),
        ];
    }

    public static function getViewsDay(){
        return self::where('created_at', '>', Carbon::now()->subDay())->value('views');
    }

    public static function getChangeDay(){
        $views_current = self::where('created_at', '>', Carbon::now()->subDay())->value('views');
        $views_previous = self::where('created_at', '<', Carbon::now()->subDay())
            ->where('created_at', '>=', Carbon::now()->subDays(2))
            ->value('views');

        return self::getPercentChange($views_current, $views_previous);
    }

    public static function getPercentChange($x, $y){
        if($x <= 0 || $y <= 0)
            $diff = 0;
        else{
            if($x > $y)
                $diff = ($x - $y) / $y * 100;
            else
                $diff = ($x - $y) / $x * 100;
        }

        return number_format($diff, 2);
    }

    public static function getViewsMonth(){
        return self::where('created_at', '>=', Carbon::now()->subMonth())->sum('views');
    }

    public static function getChangeMonth(){
        $views_current = self::where('created_at', '>', Carbon::now()->subMonth())->sum('views');
        $views_previous = self::where('created_at', '<', Carbon::now()->subMonth())
            ->where('created_at', '>=', Carbon::now()->subMonths(2))
            ->sum('views');

        return self::getPercentChange($views_current, $views_previous);
    }

    public static function getViewsAll(){
        return self::sum('views');
    }

    public static function getViewsUnique(){
        return [
            'day'   => [
                'views'  => self::getViewsUniqueDay(),
                'change' => self::getChangeUniqueDay(),
            ],
            'month' => [
                'views'  => self::getViewsUniqueMonth(),
                'change' => self::getChangeUniqueMonth(),
            ],
            'all'   => self::getViewsUniqueAll(),
        ];
    }

    public static function getViewsUniqueDay(){
        return self::where('created_at', '>', Carbon::now()->subDay())->value('views_unique');
    }

    public static function getChangeUniqueDay(){
        $views_current = self::where('created_at', '>', Carbon::now()->subDay())->value('views_unique');
        $views_previous = self::where('created_at', '<', Carbon::now()->subDay())
            ->where('created_at', '>=', Carbon::now()->subDays(2))
            ->value('views_unique');

        return self::getPercentChange($views_current, $views_previous);
    }

    public static function getViewsUniqueMonth(){
        return self::where('created_at', '>=', Carbon::now()->subMonth())->sum('views_unique');
    }

    public static function getChangeUniqueMonth(){
        $views_current = self::where('created_at', '>', Carbon::now()->subMonth())->sum('views_unique');
        $views_previous = self::where('created_at', '<', Carbon::now()->subMonth())
            ->where('created_at', '>=', Carbon::now()->subMonths(2))
            ->sum('views_unique');

        return self::getPercentChange($views_current, $views_previous);
    }

    public static function getViewsUniqueAll(){
        return self::sum('views_unique');
    }

}
