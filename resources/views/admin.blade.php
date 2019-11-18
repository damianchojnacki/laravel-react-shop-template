<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin</title>
    <!-- Styles -->
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
    <link href="{{ asset('css/black-admin.css')  }}" rel="stylesheet">
</head>
<body>
    <div id="root"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>