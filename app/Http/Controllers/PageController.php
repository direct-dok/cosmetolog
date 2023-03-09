<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Page;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{

    public function index()
    {
        $page = Page::where('slug', '=', 'front-page')->first();
        return view('page', ['page' => $page]);
    }

    public function show_page($slug)
    {
        $page = Page::where('slug', '=', $slug)->first();
        if(is_null($page)) {
            abort(404);
        }
        if($slug == 'front-page') return redirect()->route('front.page');
        return view('page', ['page' => $page]);
    }

    public function show_create_page()
    {
        $this->authorize('access-crud-page', [self::class]);
        return view('add_page');
    }

    public function save_page(Request $request)
    {
        $this->authorize('access-crud-page', [self::class]);
        $data_page = [
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'body' => $request->body,
            'seo_title' => $request->seo_title,
            'meta_description' => $request->meta_description,
            'meta_keywords' => $request->meta_keywords,
            'type_page_landing' => $request->type_page_landing ? 1 : 0,
        ];

        Page::create($data_page);

        return redirect()->route('all.pages');
    }

    public function update_page(Request $request, $id)
    {
        $this->authorize('access-crud-page', [self::class]);
        $page = Page::find($id);

        $page->title = $request->title;
        $page->subtitle = $request->subtitle;
        $page->body = $request->body;
        $page->seo_title = $request->seo_title;
        $page->meta_description = $request->meta_description;
        $page->meta_keywords = $request->meta_keywords;
        $page->type_page_landing = $request->type_page_landing ? 1 : 0;

        $page->save();
        return redirect()->route('all.pages');
    }

    public function all_pages()
    {
        $this->authorize('access-crud-page', [self::class]);
        $pages = Page::all();
        return view('admin.all_pages', ['pages' => $pages]);
    }

    public function edit_page($id)
    {
        $this->authorize('access-crud-page', [self::class]);
        $page = Page::where('id', '=', $id)->first();
        return view('admin.edit_page', ['page' => $page]);
    }

    public function show_delete_page($id)
    {
        $this->authorize('access-crud-page', [self::class]);
        $page = Page::where('id', '=', $id)->first();
        return view('admin.delete_page', ['page' => $page]);
    }

    public function delete_page($id)
    {
        $this->authorize('access-crud-page', [self::class]);
        $page = Page::where('id', '=', $id)->first();
        $page->delete();
        return redirect()->route('all.pages');
    }
}
