<?php

namespace App\Http\Controllers;

use App\Models\PeruntukanSewa;

class PeruntukanSewaController extends Controller
{
    public function index()
    {
        return PeruntukanSewa::select('idPeruntukanSewa', 'peruntukanSewa')->get();
    }
}
