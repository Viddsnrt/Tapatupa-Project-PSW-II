<?php

namespace App\Http\Controllers;

use App\Models\PermohonanSewa;
use Illuminate\Http\Request;

class PermohonanSewaController extends Controller
{
    public function index()
    {
        return PermohonanSewa::with([
            'jenisPermohonan',
            'wajibRetribusi',
            'objekRetribusi',
            'jenisJangkaWaktu',
            'peruntukanSewa',
            'status',
            'user'
        ])->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'idJenisPermohonan' => 'required|exists:jenis_permohonan,idJenisPermohonan',
            'nomorSuratPermohonan' => 'required|string',
            'tanggalPengajuan' => 'required|date',
            'idWajibRetribusi' => 'required|exists:wajib_retribusi,idWajibRetribusi',
            'idObjekRetribusi' => 'required|exists:objek_retribusi,idObjekRetribusi',
            'idJenisJangkaWaktu' => 'required|exists:jenis_jangka_waktu,idJenisJangkaWaktu',
            'lamaSewa' => 'required|integer|min:1',
            'idPeruntukanSewa' => 'required|exists:peruntukan_sewa,idPeruntukanSewa',
            'idStatus' => 'required|exists:status,idStatus',
            'createBy' => 'required|exists:user,userId'
        ]);

        return PermohonanSewa::create($data);
    }

    public function show($id)
    {
        return PermohonanSewa::with([
            'jenisPermohonan',
            'wajibRetribusi',
            'objekRetribusi',
            'jenisJangkaWaktu',
            'peruntukanSewa',
            'status',
            'user'
        ])->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $permohonan = PermohonanSewa::findOrFail($id);

        $data = $request->validate([
            'idJenisPermohonan' => 'sometimes|required|exists:jenis_permohonan,idJenisPermohonan',
            'nomorSuratPermohonan' => 'sometimes|required|string',
            'tanggalPengajuan' => 'sometimes|required|date',
            'idWajibRetribusi' => 'sometimes|required|exists:wajib_retribusi,idWajibRetribusi',
            'idObjekRetribusi' => 'sometimes|required|exists:objek_retribusi,idObjekRetribusi',
            'idJenisJangkaWaktu' => 'sometimes|required|exists:jenis_jangka_waktu,idJenisJangkaWaktu',
            'lamaSewa' => 'sometimes|required|integer|min:1',
            'idPeruntukanSewa' => 'sometimes|required|exists:peruntukan_sewa,idPeruntukanSewa',
            'idStatus' => 'sometimes|required|exists:status,idStatus',
            'createBy' => 'sometimes|required|exists:user,userId'
        ]);

        $permohonan->update($data);
        return $permohonan;
    }

    public function destroy($id)
    {
        $permohonan = PermohonanSewa::findOrFail($id);
        $permohonan->delete();
        return response()->json(['message' => 'Data berhasil dihapus']);
    }
}
