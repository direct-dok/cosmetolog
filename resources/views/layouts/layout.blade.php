<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@yield('meta_description')">
    <meta name="keywords" content="@yield('meta_keywords')">
    <meta name="author" content="elemis">
    <title>@yield('seo_title')</title>
    <meta name="yandex-verification" content="642b45658318dca2" />
    <link rel="shortcut icon" href="{{ asset('/assets/img/favicon.png') }}">
    <link rel="stylesheet" href="{{ asset('/css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/page-elements.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/swiper.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700&family=Montserrat:wght@300;400;500;700;800;900&family=Poppins:wght@300;400&family=Roboto&display=swap" rel="stylesheet">
{{--    <link rel="stylesheet" href="{{ asset('/assets/css/style.css') }}">--}}
{{--    <link rel="stylesheet" href="{{ asset('/assets/css/app.css') }}">--}}
</head>

<body>
<div class="content-wrapper">
@include('elements.page_header')
<div class="content-block">
@yield('content')
</div>

@include('elements.footer')
