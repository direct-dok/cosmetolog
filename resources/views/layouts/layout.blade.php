<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="@yield('meta_description')">
    <meta name="keywords" content="@yield('meta_keywords')">
    <meta name="author" content="elemis">
    <title>@yield('seo_title')</title>
    <link rel="shortcut icon" href="{{ asset('/assets/img/favicon.png') }}">
    <link rel="stylesheet" href="{{ asset('/assets/css/plugins.css') }}">
    <link rel="stylesheet" href="{{ asset('/assets/css/style.css') }}">
</head>

<body>
<div class="content-wrapper">
@if(isset($front_page) && $front_page)
    @include('elements.front_header')
@else
    @include('elements.page_header')
@endif

@yield('content')

@include('elements.footer')
