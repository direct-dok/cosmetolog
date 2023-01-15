@extends('layouts.app')
@section('content')
    <section class="wrapper bg-light angled upper-end">
        <div class="container py-8 py-md-12">
            <h1 class="text-center my-3 mb-9">
                Все страницы
            </h1>

            <table class="table">
                <thead>
                <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Заголовок</th>
                    <th scope="col">Ссылка</th>
                    <th scope="col">Ред.</th>
                </tr>
                </thead>
                <tbody>
            @foreach($pages as $page)
                <tr>
                    <th scope="row">{{ $page->id }}</th>
                    <td>{{ $page->title }}</td>
                    <td><a href="/{{ $page->slug }}" target="_blank">Посмотреть</a></td>
                    <td><a href="{{ route('edit.page', ['id' => $page->id]) }}" class="btn btn-circle btn-primary btn-sm"><i class="uil uil-edit-alt"></i></a></td>
                </tr>

            @endforeach
                </tbody>
            </table>
        </div>
    </section>
@endsection
