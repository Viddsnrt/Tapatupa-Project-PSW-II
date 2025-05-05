

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('status', function (Blueprint $table) {
            $table->id('idStatus');
            $table->unsignedBigInteger('idJenisStatus');
            $table->string('namaStatus');
            $table->text('keterangan')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('idJenisStatus')
                  ->references('idJenisStatus')
                  ->on('jenis_status')
                  ->onDelete('cascade'); // opsional: bisa diganti 'set null'
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('status');
    }
};
