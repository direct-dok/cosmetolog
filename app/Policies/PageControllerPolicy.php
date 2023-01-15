<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Auth;

class PageControllerPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function accessCrudPage()
    {
        $user = Auth::user();
        if($user->role->name == 'admin') {
            return Response::allow('Разрешено');
        }
        return Response::deny('Запрещено');
    }
}
