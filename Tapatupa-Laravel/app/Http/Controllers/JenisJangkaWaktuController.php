<?php

namespace App\Http\Controllers;

use App\Models\JenisJangkaWaktu;

class JenisJangkaWaktuController extends Controller
{
    public function index()
    {
        return JenisJangkaWaktu::select('idJenisJangkaWaktu', 'jenisJangkaWaktu')->get();
    }
}
