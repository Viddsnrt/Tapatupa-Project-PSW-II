import React, { useEffect, useState } from 'react';
import api from '../../api/api';

const Form = ({ onSuccess, initialData, setEditingData }) => {
  const [form, setForm] = useState({
    idJenisPermohonan: '',
    nomorSuratPermohonan: '',
    tanggalPengajuan: '',
    idWajibRetribusi: '',
    idObjekRetribusi: '',
    idJenisJangkaWaktu: '',
    lamaSewa: '',
    idPeruntukanSewa: '',
    idStatus: '',
    createBy: '1',
  });

  const [jenisPermohonan, setJenisPermohonan] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [wajibRetribusi, setWajibRetribusi] = useState([]);
  const [objekRetribusi, setObjekRetribusi] = useState([]);
  const [jenisJangkaWaktu, setJenisJangkaWaktu] = useState([]);
  const [peruntukanSewa, setPeruntukanSewa] = useState([]);



  const fetchDropdowns = async () => {
    try {
      const jenisRes = await api.get('/jenis-permohonan');
      const statusRes = await api.get('/status');
      const wajibRes = await api.get('/wajib-retribusi');
      const objekRes = await api.get('/objek-retribusi');
      const jangkaRes = await api.get('/jenis-jangka-waktu'); 
      const peruntukanRes = await api.get('/peruntukan-sewa');


  
      setJenisPermohonan(jenisRes.data);
      setStatusList(statusRes.data);
      setWajibRetribusi(wajibRes.data);
      setObjekRetribusi(objekRes.data);
      setJenisJangkaWaktu(jangkaRes.data);
      setPeruntukanSewa(peruntukanRes.data);

    } catch (error) {
      console.error('Gagal ambil data dropdown', error);
    }
  };
  

  useEffect(() => {
    fetchDropdowns();
  }, []);

  useEffect(() => {
    if (initialData) {
      setForm({
        ...initialData,
        createBy: '1',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (initialData) {
        // UPDATE
        await api.put(`/permohonan-sewa/${initialData.idPermohonanSewa}`, form);
        alert('Data berhasil diperbarui!');
      } else {
        // CREATE
        await api.post('/permohonan-sewa', form);
        alert('Data berhasil disimpan!');
      }

      setForm({
        idJenisPermohonan: '',
        nomorSuratPermohonan: '',
        tanggalPengajuan: '',
        idWajibRetribusi: '',
        idObjekRetribusi: '',
        idJenisJangkaWaktu: '',
        lamaSewa: '',
        idPeruntukanSewa: '',
        idStatus: '',
        createBy: '1',
      });

      if (onSuccess) onSuccess();
      if (setEditingData) setEditingData(null);

    } catch (err) {
      console.error('Gagal simpan data', err);
      alert('Terjadi kesalahan saat menyimpan data.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-white shadow max-w-xl mx-auto mt-6">
      <h2 className="text-lg font-bold mb-4">
        {initialData ? 'Edit' : 'Tambah'} Permohonan Sewa
      </h2>

      <label className="block mb-1">Jenis Permohonan</label>
      <select name="idJenisPermohonan" value={form.idJenisPermohonan} onChange={handleChange} className="w-full p-2 border mb-4">
        <option value="">-- Pilih Jenis Permohonan --</option>
        {jenisPermohonan.map((item) => (
          <option key={item.idJenisPermohonan} value={item.idJenisPermohonan}>
            {item.jenisPermohonan}
          </option>
        ))}
      </select>

      <label className="block mb-1">Nomor Surat Permohonan</label>
      <input
        type="text"
        name="nomorSuratPermohonan"
        value={form.nomorSuratPermohonan}
        onChange={handleChange}
        className="w-full p-2 border mb-4"
      />

      <label className="block mb-1">Tanggal Pengajuan</label>
      <input
        type="date"
        name="tanggalPengajuan"
        value={form.tanggalPengajuan}
        onChange={handleChange}
        className="w-full p-2 border mb-4"
      />

<label className="block mb-1">Jenis Jangka Waktu</label>
<select
  name="idJenisJangkaWaktu"
  value={form.idJenisJangkaWaktu}
  onChange={handleChange}
  className="w-full p-2 border mb-4"
>
  <option value="">-- Pilih Jenis Jangka Waktu --</option>
  {jenisJangkaWaktu.map((item) => (
    <option key={item.idJenisJangkaWaktu} value={item.idJenisJangkaWaktu}>
      {item.jenisJangkaWaktu}
    </option>
  ))}
</select>

<label className="block mb-1">Peruntukan Sewa</label>
<select
  name="idPeruntukanSewa"
  value={form.idPeruntukanSewa}
  onChange={handleChange}
  className="w-full p-2 border mb-4"
>
  <option value="">-- Pilih Peruntukan Sewa --</option>
  {peruntukanSewa.map((item) => (
    <option key={item.idPeruntukanSewa} value={item.idPeruntukanSewa}>
      {item.peruntukanSewa}
    </option>
  ))}
</select>


<label className="block mb-1">Wajib Retribusi</label>
<select
  name="idWajibRetribusi"
  value={form.idWajibRetribusi}
  onChange={handleChange}
  className="w-full p-2 border mb-4"
>
  <option value="">-- Pilih Wajib Retribusi --</option>
  {wajibRetribusi.map((item) => (
    <option key={item.idWajibRetribusi} value={item.idWajibRetribusi}>
      {item.namaWajibRetribusi}
    </option>
  ))}
</select>

<label className="block mb-1">Objek Retribusi</label>
<select
  name="idObjekRetribusi"
  value={form.idObjekRetribusi}
  onChange={handleChange}
  className="w-full p-2 border mb-4"
>
  <option value="">-- Pilih Objek Retribusi --</option>
  {objekRetribusi.map((item) => (
    <option key={item.idObjekRetribusi} value={item.idObjekRetribusi}>
      {item.objekRetribusi}
    </option>
  ))}
</select>


      <label className="block mb-1">Status</label>
      <select name="idStatus" value={form.idStatus} onChange={handleChange} className="w-full p-2 border mb-4">
        <option value="">-- Pilih Status --</option>
        {statusList.map((item) => (
          <option key={item.idStatus} value={item.idStatus}>
            {item.namaStatus}
          </option>
        ))}
      </select>

      <div className="flex gap-2 mt-4">
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          {initialData ? 'Update' : 'Simpan'}
        </button>
        {initialData && (
          <button
            type="button"
            onClick={() => setEditingData(null)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Batal
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
