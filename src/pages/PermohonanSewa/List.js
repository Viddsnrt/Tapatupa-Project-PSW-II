import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import Form from './Form';

const List = () => {
  const [data, setData] = useState([]);
  const [editingData, setEditingData] = useState(null);

  const getData = async () => {
    try {
      const res = await api.get('/permohonan-sewa');
      setData(res.data);
    } catch (err) {
      console.error('Gagal ambil data', err);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = window.confirm('Yakin ingin menghapus data ini?');
    if (!konfirmasi) return;

    try {
      await api.delete(`/permohonan-sewa/${id}`);
      alert('Data berhasil dihapus!');
      getData();
    } catch (err) {
      console.error('Gagal hapus data', err);
      alert('Terjadi kesalahan saat menghapus data.');
    }
  };

  const handleEdit = (item) => {
    setEditingData(item);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll ke atas ke form
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Daftar Permohonan Sewa</h2>

      {/* Form Tambah/Edit */}
      <Form onSuccess={getData} initialData={editingData} setEditingData={setEditingData} />

      {/* Tabel Data */}
      <div className="overflow-x-auto mt-6">
        <table className="table-auto border w-full text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">No</th>
              <th className="border p-2">Nama Wajib Retribusi</th>
              <th className="border p-2">Jenis Permohonan</th>
              <th className="border p-2">Tanggal</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.idPermohonanSewa}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{row.wajib_retribusi?.namaWajibRetribusi || '-'}</td>
                <td className="border p-2">{row.jenis_permohonan?.jenisPermohonan || '-'}</td>
                <td className="border p-2">{row.tanggalPengajuan}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(row)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(row.idPermohonanSewa)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">Belum ada data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
