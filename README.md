# Shop template created with Laravel & React

![Laravel](https://github.com/damianchojnacki/laravel-react-shop-template/actions/workflows/laravel.yml/badge.svg)

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1024px-Laravel.svg.png" height="200">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1280px-React_Logo_SVG.svg.png" height="200"> 
</p>

### 

Requirements:
- Google Places API (Address autocomplete),
- PayPal REST API (Payment service)

1. Deploy an app from github repo.
2. Generate APP_KEY:

```bash
php artisan key:generate 
```

For deploy to heroku you can use --show option to copy and paste key:
```bash
php artisan key:generate --show
```

3. Set up an ENV vars:

| KEY | VALUE |
| ------ | ------ |
| APP_KEY |
| GOOGLE_CLIENT_ID |
| GOOGLE_SECRET_KEY | 
| GOOGLE_PLACES_API_KEY |
| PAYPAL_CLIENT_ID |
    
4. Create required databases and seed:

```bash
php artisan migrate
php artisan db:seed
```

5. Done

# License

MIT license
