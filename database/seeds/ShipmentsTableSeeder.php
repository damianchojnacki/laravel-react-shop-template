<?php

namespace Database\Seeders;

use App\Models\Currency;
use App\Models\Shipment;
use Illuminate\Database\Seeder;

class ShipmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        $shipment = new Shipment();
        $shipment->cost = 11.99;
        $shipment->country = "PL";
        $shipment->currency()->associate(Currency::where('iso', 'PLN')->first());
        $shipment->save();

        $shipment = new Shipment();
        $shipment->cost = 5;
        $shipment->country = "GB";
        $shipment->currency()->associate(Currency::where('iso', 'GBP')->first());
        $shipment->save();
    }
}
