<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('permohonan_sewas', function (Blueprint $table) {
            $table->id('idPermohonanSewa');
            $table->unsignedBigInteger('idJenisPermohonan');
            $table->string('nomorSuratPermohonan');
            $table->date('tanggalPengajuan');
            $table->unsignedBigInteger('idWajibRetribusi');
            $table->unsignedBigInteger('idObjekRetribusi');
            $table->unsignedBigInteger('idJenisJangkaWaktu');
            $table->integer('lamaSewa');
            $table->unsignedBigInteger('idPeruntukanSewa');
            $table->unsignedBigInteger('idStatus');
            $table->unsignedBigInteger('createBy');
        
            $table->timestamps();
            $table->softDeletes();
        
            // Relasi (FK)
            $table->foreign('idJenisPermohonan')->references('idJenisPermohonan')->on('jenis_permohonan')->onDelete('cascade');
            $table->foreign('idWajibRetribusi')->references('idWajibRetribusi')->on('wajib_retribusi')->onDelete('cascade');
            $table->foreign('idObjekRetribusi')->references('idObjekRetribusi')->on('objek_retribusi')->onDelete('cascade');
            $table->foreign('idJenisJangkaWaktu')->references('idJenisJangkaWaktu')->on('jenis_jangka_waktu')->onDelete('cascade');
            $table->foreign('idPeruntukanSewa')->references('idPeruntukanSewa')->on('peruntukan_sewa')->onDelete('cascade');
            $table->foreign('idStatus')->references('idStatus')->on('status')->onDelete('cascade');
            $table->foreign('createBy')->references('userId')->on('user')->onDelete('cascade');
        });
        
    }

    public function down(): void
    {
        Schema::dropIfExists('permohonan_sewas');
    }
};
    