<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Init', [
        "name" => "Wesley",
        "url_route" => \URL::route('my-first-route')
    ]);
})->name('home');

Route::get('/route', function () {
    return Inertia::render('Route', []);
})->name('my-first-route');
