@extends('layouts.app')
@section('content')
    <section class="wrapper bg-light angled upper-end">
        <div class="container py-8 py-md-12">
            <h1 class="text-center my-3 mb-9">
                Добавить страницу
            </h1>
            <form action="{{ route('save.page') }}" method="POST">
                @csrf
                <div class="form-floating mb-4">
                    <input id="textInputExample" type="text" name="title" class="form-control" placeholder="Заголовок статьи">
                    <label for="textInputExample">Заголовок статьи</label>
                </div>
                <!-- /.form-floating -->

                <div class="form-floating mb-4">
                    <input id="textInputExample" type="text" name="subtitle" class="form-control" placeholder="Подзаголовок">
                    <label for="textInputExample">Подзаголовок</label>
                </div>
                <!-- /.form-floating -->

                <div class="form-floating mb-4">
                    <textarea id="textareaExample" name="body" class="form-control" placeholder="Текст статьи" style="height: 150px" required></textarea>
                    <label for="textareaExample">Текст статьи</label>
                </div>
                <!-- /.form-floating -->


                <div class="form-floating mb-4">
                    <input id="textInputExample" type="text" name="seo_title" class="form-control" placeholder="Метатег Title">
                    <label for="textInputExample">Метатег Title</label>
                </div>
                <!-- /.form-floating -->

                <div class="form-floating mb-4">
                    <input id="textInputExample" type="text" name="meta_description" class="form-control" placeholder="Метатег Description">
                    <label for="textInputExample">Метатег Description</label>
                </div>
                <!-- /.form-floating -->

                <div class="form-floating mb-4">
                    <input id="textInputExample" type="text" name="meta_keywords" class="form-control" placeholder="Метатег Keywords">
                    <label for="textInputExample">Метатег Keywords</label>
                </div>
                <!-- /.form-floating -->

                <button class="btn btn-blue rounded-pill" type="submit">Добавить</button>
            </form>
        </div>
    </section>
@endsection
