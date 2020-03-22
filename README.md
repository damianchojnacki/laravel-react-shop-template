# Shop template created with Laravel & React

<p align="center">
    <img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" height="200">
    <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="200"> 
</p>

---
Master branch is working application, ready to deploy on:
<p align="center">
    <img src="https://cdn-images-1.medium.com/max/1600/1*fIjRtO5P8zc3pjs0E5hYkw.png" height="200">
</p>
---

## Installation

Laravel-react-shop-template require a **Heroku Dyno** and extension **Heroku Postgres**.

1. Deploy application.
2. Generate APP_KEY:

```bash
php artisan key:generate --show
```

3. Copy .env.example to .env and set up required ENV vars:
- APP (APP_KEY generated above)
- DATABASE
- MAIL
- GOOGLE
- CLOUDINARY
- PAYPAL

4. Create required databases and seed:

```bash
php artisan migrate --seed
```

5. Done

## Used technologies
- [Laravel 6 Framework](https://github.com/laravel/laravel)
- [Laravel Telescope](https://github.com/laravel/telescope)
- [Inertia.js](https://inertiajs.com)
- [React.js](https://github.com/facebook/react)
- [Cloudinary with Laravel wrapper](https://github.com/jrm2k6/cloudder)
- [Font Awesome](https://fontawesome.com)
- [Animate.css](https://github.com/daneden/animate.css)
- [Shards React UI Kit](https://github.com/DesignRevision/shards-react)
- [PayPal Express Checkout](https://developer.paypal.com/docs/checkout)
- [Google Sing-in Authentication](https://developers.google.com/identity/sign-in/web/sign-in)
- [Real-time address autocomplete with Google Places API](https://developers.google.com/places/web-service/intro)
- [Real-time Currency Exchange API](https://exchangeratesapi.io)

## License

MIT license
