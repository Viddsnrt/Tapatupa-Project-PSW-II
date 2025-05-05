<?php

namespace App\Http\Controllers;

use App\Models\ObjekRetribusi;

class ObjekRetribusiController extends Controller
{
    public function index()
    {
        return ObjekRetribusi::select('idObjekRetribusi', 'objekRetribusi')->get();
    }
}
