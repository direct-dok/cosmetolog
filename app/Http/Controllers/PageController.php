<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Page;

class PageController extends Controller
{

    public function index()
    {
        $page = Page::where('slug', '=', 'front-page')->first();
        return view('page', ['front_page' => true, 'page' => $page]);
    }

    public function show_page($slug)
    {

        $page = Page::where('slug', '=', $slug)->first();
        if($slug == 'front-page') return view('page', ['front_page' => true, 'page' => $page]);
        return view('page', ['front_page' => false, 'page' => $page]);
    }

    public function show_create_page()
    {
        return view('add_page');
    }

    public function save_page(Request $request)
    {
        $data_page = [
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'body' => $request->body,
            'seo_title' => $request->seo_title,
            'meta_description' => $request->meta_description,
            'meta_keywords' => $request->meta_keywords,
        ];

        Page::create($data_page);

        return redirect()->route('all.pages');
    }

    public function update_page(Request $request, $id)
    {
        $page = Page::find($id);

        $page->title = $request->title;
        $page->subtitle = $request->subtitle;
        $page->body = $request->body;
        $page->seo_title = $request->seo_title;
        $page->meta_description = $request->meta_description;
        $page->meta_keywords = $request->meta_keywords;

        $page->save();
    }

    public function all_pages()
    {
        $pages = Page::all();
        return view('admin.all_pages', ['pages' => $pages]);
    }

    public function edit_page($id)
    {
        $page = Page::where('id', '=', $id)->first();
        return view('admin.edit_page', ['page' => $page]);
    }

    public function show_delete_page($id)
    {
        $page = Page::where('id', '=', $id)->first();
        return view('admin.delete_page', ['page' => $page]);
    }

    public function delete_page($id)
    {
        $page = Page::where('id', '=', $id)->first();
        $page->delete();
        return redirect()->route('all.pages');
    }
}
