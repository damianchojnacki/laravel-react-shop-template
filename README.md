# Shop template created with Laravel & React

<p align="center">
    <img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400">
    +
    <img src="https://cdn.worldvectorlogo.com/logos/react.svg" width="100"> 
</p>

---
Master branch is working application ready for deployment on:
![Heroku](https://cdn-images-1.medium.com/max/1600/1*fIjRtO5P8zc3pjs0E5hYkw.png)
---

### 

Laravel-react-shop-template require a **Heroku Dyno** and extension **Heroku Postgres**.

1. Deploy an app from github repo.
2. Generate APP_KEY:

```bash
php artisan key:generate --show
```

3. Set up an ENV vars:

| KEY | VALUE |
| ------ | ------ |
| APP_KEY | ^^ generated above ^^ |

4. Create required databases and seed:

```bash
php artisan migrate
php artisan db:seed
```

5. Done

# License

Copyright 2019 Damian Chojnacki

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
