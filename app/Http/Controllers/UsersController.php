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

    public function create()
    {
        return inertia("Users/Create", []);
    }

    public function store(Request $request)
    {
        User::create(
            $request->validate([
                'name' => ['required', 'max:50'],
                'email' => ['required', 'max:50', 'email'],
                'password' => ['required'],
            ])
        );

        return \Redirect::route('users.index');
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

    public function edit(User $user)
    {
        return inertia("Users/Edit", ["user" => $user]);
    }

    public function update(Request $request, User $user)
    {
        $validate = [
            'name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
        ];

        if($request->password) {
            $validate['password'] = ['required'];
        }

        $user->update(
            $request->validate($validate)
        );

        return \Redirect::route('users.index');
    }

    public function destroy($id)
    {
        return [
            'action' => 'destroy',
            'method' => 'delete'
        ];
    }
}
