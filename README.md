# Shop template created with Laravel & React

![Laravel](https://github.com/damianchojnacki/laravel-react-shop-template/workflows/Laravel/badge.svg)
[![DeepScan grade](https://deepscan.io/api/teams/8354/projects/10504/branches/147113/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=8354&pid=10504&bid=147113)

<p align="center">
    <img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" height="200">
    <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="200"> 
</p>

---
Master branch is working application ready for deployment on:
<p align="center">
    <img src="https://cdn-images-1.medium.com/max/1600/1*fIjRtO5P8zc3pjs0E5hYkw.png" height="200">
</p>
---

### 

Requirements:
- Google Places API (Address autocomplete),
- Cloudinary (Images storage)
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
| CLOUDINARY_API_KEY | 
| CLOUDINARY_API_SECRET |
| CLOUDINARY_CLOUD_NAME |
| PAYPAL_CLIENT_ID |
    
4. Create required databases and seed:

```bash
php artisan migrate
php artisan db:seed
```

5. Done

# License

MIT license
