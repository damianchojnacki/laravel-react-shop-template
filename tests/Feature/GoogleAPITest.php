<?php

namespace Tests\Feature;

use App\Currency;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GoogleAPITest extends TestCase
{
    public function testGoogleAutocompleteReturnsAddresses(){
        if(config('services.google.places_key')){
            $this->get("/api/google/places/street")
                ->assertJsonStructure([['description', 'id']]);
        }
    }
}
