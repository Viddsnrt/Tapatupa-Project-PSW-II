<?php

namespace App\Http\Controllers;

use App\Models\WajibRetribusi;

class WajibRetribusiController extends Controller
{
    public function index()
    {
        return WajibRetribusi::select('idWajibRetribusi', 'namaWajibRetribusi')->get();
    }
}
