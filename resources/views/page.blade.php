@extends('layouts.layout')

@section('seo_title', $page->seo_title)
@section('meta_description', $page->meta_description)
@section('meta_keywords', $page->meta_keywords)

@if($front_page)
    @section('content')
        {!! $page->body !!}
    @endsection
@else
    @section('content')
        <section class="wrapper bg-light">
            <div class="container pt-10 pt-md-14">
                <div class="row">
                    <div class="col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        <h1 class="display-1 mb-3">{{ $page->title }}</h1>
                        @if(isset($page->subtitle))
                            <p class="lead fs-lg pe-lg-15 pe-xxl-12">{{ $page->subtitle }}</p>
                        @endif
                    </div>
                    <!-- /column -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container -->
        </section>
        <section class="wrapper bg-light">
            <div class="container py-14 py-md-16">
        {!! $page->body !!}
            </div>
        </section>
    @endsection
@endif

