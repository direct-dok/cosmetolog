<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/', [PageController::class, 'index'])->name('front.page');
Route::get('/{slug}', [PageController::class, 'show_page'])->name('front.page');

Route::get('/page/add', [PageController::class, 'show_create_page'])->name('create.page');
Route::post('/page/save', [PageController::class, 'save_page'])->name('save.page');
Route::put('/page/update/{id}', [PageController::class, 'update_page'])->name('update.page');
Route::get('/page/all', [PageController::class, 'all_pages'])->name('all.pages');
Route::get('/page/edit/{id}', [PageController::class, 'edit_page'])->name('edit.page');
Route::get('/page/delete/{id}', [PageController::class, 'show_delete_page'])->name('show.delete.page');
Route::delete('/page/delete/{id}', [PageController::class, 'delete_page'])->name('delete.page');




