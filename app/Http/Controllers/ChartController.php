<?php

namespace App\Http\Controllers;

use App\LaravelChart;

class ChartController extends Controller
{
    public function products()
    {
        $chart = new LaravelChart([
            'title' => 'Products (by month)',
            'report_type' => 'group_by_date',
            'model' => 'App\Product',
            'group_by_field' => 'created_at',
            'group_by_period' => 'month',
            'filter_field' => 'created_at',
            'filter_days' => 365,
        ]);

        return response($chart->getDivided(), 200);
    }

    public function views()
    {
        $chart = new LaravelChart([
            'title' => 'Views (by month)',
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
            'title' => 'Unique views (by month)',
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
