<?php


namespace App\Helpers;

class ChartHelper
{
    public static function getName($resource){
        return ucfirst(str_replace('-', ' ', $resource));
    }

    public static function getModel($resource){
        strpos($resource, '-') !== false && $resource = explode('-', $resource)[0];

        $resource !== 'views' && $resource = substr($resource, 0, -1);

        return 'App\\' . ucfirst($resource);
    }

    public static function getAggregateField($resource){
        $field = null;

        strpos($resource, '-') !== false && $field = explode('-', $resource)[1];

        return $field;
    }
}
