<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    public function register (Request $request)
    {
        $user = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user['password'] = bcrypt($user['password']);
        $data = User::create($user);

        return response()->json([
            'message' => 'usuario Registrado com sucesso',
            'user' => $data
        ]);
    }

    public function login (Request $request)
    {
        $credentials = $request->only('email', 'password');

        if ( Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('auth-token')->plainTextToken;

            return response()->json([
                'message' => 'usuario logado com sucesso',
                'token' => $token
            ]);
        }
        return response()->json([
            'error' => 'credenciais inválidas'
        ]);

    }
}
