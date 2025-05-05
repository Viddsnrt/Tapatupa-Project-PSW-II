<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PermohonanSewa extends Model
{
    use SoftDeletes;

    protected $table = 'permohonan_sewas';
    protected $primaryKey = 'idPermohonanSewa';
    protected $guarded = [];

    public function jenisPermohonan() {
        return $this->belongsTo(JenisPermohonan::class, 'idJenisPermohonan');
    }

    public function wajibRetribusi() {
        return $this->belongsTo(WajibRetribusi::class, 'idWajibRetribusi');
    }

    public function objekRetribusi() {
        return $this->belongsTo(ObjekRetribusi::class, 'idObjekRetribusi');
    }

    public function jenisJangkaWaktu() {
        return $this->belongsTo(JenisJangkaWaktu::class, 'idJenisJangkaWaktu');
    }

    public function peruntukanSewa() {
        return $this->belongsTo(PeruntukanSewa::class, 'idPeruntukanSewa');
    }

    public function status() {
        return $this->belongsTo(Status::class, 'idStatus');
    }

    public function user() {
        return $this->belongsTo(User::class, 'createBy');
    }
}

