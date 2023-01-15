@extends('layouts.app')
@section('content')
    <section class="wrapper bg-light angled upper-end">
        <div class="container py-8 py-md-12">
            <h1 class="text-center my-3 mb-9">
                Удаление страницы
            </h1>
            <div class="alert alert-warning alert-icon" role="alert">
                <i class="uil uil-exclamation-triangle"></i> Вы уверены что хотите удалить страницу? <strong><a href="/{{ $page->slug }}">{{ $page->title }}</a></strong>.
            </div>
            <form action="{{ route('delete.page', ['id' => $page->id]) }}" method="POST">
                @method('DELETE')
                @csrf
                <button class="btn btn-red rounded-pill" type="submit">Удалить</button>
                <a href="{{ route('all.pages') }}" class="btn btn-soft-leaf rounded-pill">Отмена</a>
            </form>
        </div>
    </section>
@endsection
