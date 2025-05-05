

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('objek_retribusi', function (Blueprint $table) {
            $table->id('idObjekRetribusi');
            $table->unsignedBigInteger('idJenisObjekRetribusi');
            $table->unsignedBigInteger('idLokasiObjekRetribusi');

            $table->string('kodeObjekRetribusi')->nullable();
            $table->string('noBangunan')->nullable();
            $table->string('objekRetribusi');
            $table->decimal('luasTanah', 10, 2)->nullable();
            $table->decimal('luasBangunan', 10, 2)->nullable();
            $table->text('alamat')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->text('keterangan')->nullable();
            $table->string('gambarDenahTanah')->nullable();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('idJenisObjekRetribusi')
                  ->references('idJenisObjekRetribusi')
                  ->on('jenis_objek_retribusi')
                  ->onDelete('cascade');

            $table->foreign('idLokasiObjekRetribusi')
                  ->references('idLokasiObjekRetribusi')
                  ->on('lokasi_objek_retribusi')
                  ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('objek_retribusi');
    }
};

