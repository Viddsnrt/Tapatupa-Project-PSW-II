


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
        Schema::create('jenis_permohonan', function (Blueprint $table) {
            $table->id('idJenisPermohonan');
            $table->unsignedBigInteger('parentId')->nullable(); // jika ada hierarchy
            $table->string('jenisPermohonan');
            $table->text('keterangan')->nullable();
            $table->timestamps();
            $table->softDeletes();

            // Optional FK jika parentId mau nyambung ke dirinya sendiri
            $table->foreign('parentId')->references('idJenisPermohonan')->on('jenis_permohonan')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jenis_permohonan');
    }
};
