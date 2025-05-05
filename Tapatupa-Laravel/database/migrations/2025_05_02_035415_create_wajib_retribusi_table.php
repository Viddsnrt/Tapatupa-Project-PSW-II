


<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('wajib_retribusi', function (Blueprint $table) {
            $table->id('idWajibRetribusi');
            $table->unsignedBigInteger('idJenisRetribusi');
            $table->string('NIK');
            $table->string('namaWajibRetribusi');
            $table->string('pekerjaan')->nullable();
            $table->text('alamat')->nullable();
            $table->string('nomorPonsel')->nullable();
            $table->string('nomorWhatsapp')->nullable();
            $table->string('email')->nullable();
            $table->string('fileFoto')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('idJenisRetribusi')
                  ->references('idJenisRetribusi')
                  ->on('jenis_retribusi')
                  ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('wajib_retribusi');
    }
};

