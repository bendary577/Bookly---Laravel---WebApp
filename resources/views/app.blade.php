<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" style="height:100%;margin:0;">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

         <!-- CSRF Token -->
         <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Style -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">  
    </head>

    <body style="width:100%;height:100%;margin:0;padding:0;">
        <div id="app" style="width:100%;height:100%;margin:0;padding:0;">

        </div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
    
</html>
