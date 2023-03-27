@extends('layouts.layout')

@section('seo_title', $page->seo_title)
@section('meta_description', $page->meta_description)
@section('meta_keywords', $page->meta_keywords)

@section('content')
    @if($page->type_page_landing)
        {!! $page->body !!}
    @else

        <section class="main-heading container">
            <h1 class="main-heading__title">{{ $page->title }}</h1>
            @if(isset($page->subtitle))
                <p class="main-heading__subtitle">{{ $page->subtitle }}</p>
            @endif
        </section>

        <div class="page-content-wrapper">
            {!! $page->body !!}
        </div>
    @endif
@endsection

