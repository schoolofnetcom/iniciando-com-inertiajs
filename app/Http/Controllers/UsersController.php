<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::all();
        // return Inertia::render("Users/List", ["users" => $users]);
        return inertia("Users/List", ["users" => $users]);
    }

    public function show(User $user)
    {
        return Inertia::render("Users/Show", [
                "user" => $user,
                "title" => "Esta página recebe um parametro"
            ]
        )->withViewData(
            ["onlyView" => "valor passado para o blade view"]
        );
    }
}
