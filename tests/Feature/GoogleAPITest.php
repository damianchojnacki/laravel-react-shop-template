<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class GoogleAPITest extends TestCase
{
    public function testGoogleAutocompleteReturnsAddresses(){
        $body = json_decode(file_get_contents(base_path('tests/fixtures/google-places-autocomplete.json')), true);

        Http::fake([
            'https://maps.googleapis.com/maps/api/place/autocomplete/*' => Http::response($body)
        ]);

        $this->get("/api/google/places/street")
            ->assertJsonStructure([['description', 'place_id']]);
    }
}
