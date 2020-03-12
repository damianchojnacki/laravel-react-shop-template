<?php

namespace App\Jobs;

use App\Image;
use App\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class UploadImage implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $product, $seeded = false;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Product $product, $img = null)
    {
        $this->product = $product;

        //check if product was added manually or by seeder
        if(!$img) $this->seeded = true;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $image = new Image();

        if($this->seeded)
            $image->url = Product::imageUpload('./public/images/products/' . $this->product->id . '.png'); //seeder
        else
            $image->url = Product::imageUpload($this->product->img); //admin panel

        $this->product->image()->save($image);
    }
}
