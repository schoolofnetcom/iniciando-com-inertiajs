<?php

use App\Http\Controllers\UsersController;
use App\Http\Controllers\LinksController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Layout', [ "title" => "Root Page" ]);
})->name('root');

Route::get('/home', function () {
    return Inertia::render('Home', [ "title" => "Home Page" ]);
})->name('page.home');

Route::get('/about', function () {
    return Inertia::render('About', [ "title" => "About Page" ]);
})->name('page.about');

Route::get('/contact', function () {
    return Inertia::render('Contact', [ "title" => "Contact Page" ]);
})->name('page.contact');

Route::get('/route', function () {
    return Inertia::render('Route', []);
})->name('my-first-route');

Route::resource('users', UsersController::class);

Route::get('aula-links', function(){
    return Inertia::render('Link', []);
});

Route::resource('links', LinksController::class);


Route::get('aula-visit', function(){
    return Inertia::render('Visit', []);
});
