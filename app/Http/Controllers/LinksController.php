<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class LinksController extends Controller
{
    public function index()
    {
        return [
            'action' => 'index',
            'method' => 'get'
        ];
    }

    public function create()
    {
        return [
            'action' => 'create',
            'method' => 'get'
        ];
    }

    public function store(Request $request)
    {
        // User::create($request->all());

        return [
            'action' => 'store',
            'method' => 'post',
            'data' => $request->all(),
        ];
    }

    public function show($id)
    {
        return [
            'action' => 'show',
            'method' => 'get'
        ];
    }

    public function edit($id)
    {
        return [
            'action' => 'edit',
            'method' => 'get'
        ];
    }

    public function update(Request $request, $id)
    {
        return [
            'action' => 'update',
            'method' => 'PUT/PATCH'
        ];
    }

    public function destroy($id)
    {
        return [
            'action' => 'destroy',
            'method' => 'delete'
        ];
    }
}
