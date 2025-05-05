<?php

namespace App\Http\Controllers;

use App\Models\JenisPermohonan;
use Illuminate\Http\Request;

class JenisPermohonanController extends Controller
{
    /**
     * Tampilkan semua data jenis permohonan.
     */
    public function index()
    {
        return JenisPermohonan::all();
    }

    /**
     * Simpan data baru jenis permohonan.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'jenisPermohonan' => 'required|string|max:255',
            'keterangan' => 'nullable|string'
        ]);

        return JenisPermohonan::create($validated);
    }

    /**
     * Tampilkan satu data berdasarkan ID.
     */
    public function show($id)
    {
        return JenisPermohonan::findOrFail($id);
    }

    /**
     * Update data jenis permohonan.
     */
    public function update(Request $request, $id)
    {
        $jenis = JenisPermohonan::findOrFail($id);

        $validated = $request->validate([
            'jenisPermohonan' => 'required|string|max:255',
            'keterangan' => 'nullable|string'
        ]);

        $jenis->update($validated);

        return $jenis;
    }

    /**
     * Hapus data jenis permohonan.
     */
    public function destroy($id)
    {
        JenisPermohonan::destroy($id);

        return response()->json(['message' => 'Data berhasil dihapus.']);
    }
}
