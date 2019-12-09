<?php

namespace App\Http\Controllers;

use App\LaravelChart;
use Carbon\Carbon;

class ChartController extends Controller
{
    public function orders()
    {
        $chart = new LaravelChart([
            'title' => 'Orders (one year)',
            'report_type' => 'group_by_date',
            'model' => 'App\Order',
            'group_by_field' => 'created_at',
            'group_by_period' => 'month',
            'filter_field' => 'created_at',
            'filter_days' => Carbon::now()->daysInYear,
        ]);

        return response($chart->getDivided(), 200);
    }

    public function ordersCountries()
    {
        $chart = new LaravelChart([
            'title' => 'Total orders by country',
            'report_type' => 'group_by_relation',
            'model' => 'App\Order',
            'group_by_field' => 'user',
            'relation_field' => 'country',
            'relation_field2' => 'name',
        ]);

        return response($chart->getDivided(), 200);
    }

    public function ordersValues()
    {
        $chart = new LaravelChart([
            'title' => 'Total value of orders (one year)',
            'report_type' => 'group_by_date',
            'model' => 'App\Order',
            'group_by_field' => 'created_at',
            'group_by_period' => 'month',
            'filter_days' => 365,
            'aggregate_field' => 'value',
            'aggregate_function' => 'sum',
            'sign' => '$',
        ]);

        return response($chart->getDivided(), 200);
    }

    public function views()
    {
        $chart = new LaravelChart([
            'title' => 'Views (one year)',
            'report_type' => 'group_by_date',
            'model' => 'App\Views',
            'group_by_field' => 'created_at',
            'group_by_period' => 'month',
            'filter_field' => 'created_at',
            'filter_days' => 365,
            'aggregate_field' => 'views',
            'aggregate_function' => 'sum',
        ]);

        return response($chart->getDivided(), 200);
    }

    public function viewsUnique()
    {
        $chart = new LaravelChart([
            'title' => 'Unique views (one year)',
            'report_type' => 'group_by_date',
            'model' => 'App\Views',
            'group_by_field' => 'created_at',
            'group_by_period' => 'month',
            'filter_field' => 'created_at',
            'filter_days' => 365,
            'aggregate_field' => 'views_unique',
            'aggregate_function' => 'sum',
        ]);

        return response($chart->getDivided(), 200);
    }
}
