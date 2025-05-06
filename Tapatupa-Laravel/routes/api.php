<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JenisPermohonanController;

Route::apiResource('jenis-permohonan', JenisPermohonanController::class);
