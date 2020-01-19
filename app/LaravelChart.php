<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

class LaravelChart {

    public $options = [];
    public $data = [];

    const GROUP_PERIODS = [
        'day' => 'Y-m-d',
        'week' => 'Y-W',
        'month' => 'Y-m',
        'year' => 'Y',
    ];

    public function __construct($chart_options)
    {
        $this->options = $chart_options;
        $this->data = $this->prepareData();
    }

    private function prepareData()
    {
        $this->validateOptions($this->options);

        try {
            if($this->options['report_type'] == "group_by_relation")
                $order_by = "created_at";
            else
                $order_by = $this->options['group_by_field'];

            $query = $this->options['model']::orderBy($order_by)
                ->when(isset($this->options['filter_field']), function($query) {
                    if (isset($this->options['filter_days'])) {
                        return $query->where($this->options['filter_field'], '>=',
                            now()->subDays($this->options['filter_days'])->format('Y-m-d'));
                    } else if (isset($this->options['filter_period'])) {
                        switch ($this->options['filter_period']) {
                            case 'week': $start = Carbon::now()->subWeek(); break;
                            case 'month': $start = Carbon::now()->subMonth(); break;
                            case 'year': $start = Carbon::now()->subYear(); break;
                        }
                        if (isset($start)) {
                            return $query->where($this->options['filter_field'], '>=', $start);
                        }
                    }
                });

            if($this->options['report_type'] == "group_by_relation")
                $query->whereHas($this->options['group_by_field']);
            else
                $query->whereNotNull($this->options['group_by_field']);

            if($this->options['group_by_field'] != 'created_at'){
                $query->whereHas($this->options['group_by_field'], function($query){
                    if(isset($this->options['relation_field'])) $query->has($this->options['relation_field']);
                });
            }

            return $query->get()
                ->groupBy(function ($entry) {
                    if ($this->options['report_type'] == 'group_by_string') {
                        return $entry->{$this->options['group_by_field']};
                    }
                    else if ($entry->{$this->options['group_by_field']} instanceof \Carbon\Carbon) {
                        return $entry->{$this->options['group_by_field']}
                            ->format(self::GROUP_PERIODS[$this->options['group_by_period']]);
                    } else if($this->options['report_type'] == 'group_by_relation'){
                        if(isset($this->options['relation_field2']))
                            $return = $entry->{$this->options['group_by_field']}->{$this->options['relation_field']}->{$this->options['relation_field2']};
                        else if(isset($this->options['relation_field']))
                            $return = $entry->{$this->options['group_by_field']}->{$this->options['relation_field']};
                        else
                            $return = $entry->{$this->options['group_by_field']};

                        return $return;
                    } else {
                        return \Carbon\Carbon::createFromFormat($this->options['group_by_field_format'] ?? 'Y-m-d H:i:s',
                            $entry->{$this->options['group_by_field']})
                            ->format(self::GROUP_PERIODS[$this->options['group_by_period']]);
                    }
                })
                ->map(function ($entries) {
                    return $entries->{$this->options['aggregate_function'] ?? 'count'}($this->options['aggregate_field'] ?? '');
                });

        } catch (\Error $ex) {
            throw new \Exception('Laravel Charts error: ' . $ex->getMessage());
        }
    }

    public function getTotal(){
        return round(array_sum($this->data->toArray()));
    }

    public function getDivided(){
        !isset($this->options['sign']) && $this->options['sign'] = null;

        $data = [
            'total' => $this->getTotal(),
            'title' => $this->options['title'],
            'labels' => [],
            'values' => [],
            'sign' => $this->options['sign'],
        ];

        foreach($this->data as $key => $value){
            $data['labels'][] = $key;
            $data['values'][] = round($value);
        }

        return $data;
    }

    private function validateOptions(array $options)
    {
        $rules = [
            'title' => 'required',
            'report_type' => 'required|in:group_by_date,group_by_string,group_by_relation',
            'model' => 'required|bail',
            'group_by_field' => 'required|bail',
            'relation_field' => 'bail',
            'relation_field2' => 'bail',
            'group_by_period' => 'in:day,week,month,year|bail',
            'aggregate_function' => 'in:count,sum,avg|bail',
            'filter_days' => 'integer',
            'filter_period' => 'in:week,month,year',
        ];

        $messages = [
            'required' => 'please specify :attribute option',
            'report_type.in' => 'report_type option should contain one of these values - group_by_date/group_by_string',
            'group_by_period.in' => 'group_by option should contain one of these values - day/week/month/year',
            'aggregate_function.in' => 'number_function option should contain one of these values - count/sum/avg',
            'filter_period.in' => 'filter_period option should contain one of these values - week/month/year',
        ];

        $attributes = [
            'report_type' => 'report_type',
            'group_by_field' => 'group_by_field',
            'group_by_period' => 'group_by_period',
            'aggregate_function' => 'aggregate_function',
            'filter_days' => 'filter_days',
            'filter_period' => 'filter_period',
        ];

        $validator = Validator::make($options, $rules, $messages, $attributes);

        if ($validator->fails()) {
            throw new \Exception('Laravel Charts options validator: ' . $validator->errors()->first());
        }
    }
}
