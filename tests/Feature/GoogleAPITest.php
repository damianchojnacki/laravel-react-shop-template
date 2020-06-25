<?php

namespace Tests\Feature;

use Tests\TestCase;

class GoogleAPITest extends TestCase
{
    public function testGoogleAutocompleteReturnsAddresses(){
        if(!config('services.github')){
            $this->get("/api/google/places/street")
                ->assertJsonStructure([['description', 'id']]);
        }
    }
}
