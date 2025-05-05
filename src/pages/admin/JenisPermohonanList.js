import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import AdminLayout from '../../layouts/AdminLayout';

const JenisPermohonanList = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ jenisPermohonan: '', keterangan: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchData = async () => {
    try {
      const res = await api.get('/jenis-permohonan');
      setData(res.data);
    } catch (err) {
      console.error('Gagal mengambil data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/jenis-permohonan/${editingId}`, form);
      } else {
        await api.post('/jenis-permohonan', form);
      }
      setForm({ jenisPermohonan: '', keterangan: '' });
      setEditingId(null);
      fetchData();
    } catch (err) {
      alert('Gagal simpan data');
    }
  };

  const handleEdit = (item) => {
    setForm({
      jenisPermohonan: item.jenisPermohonan,
      keterangan: item.keterangan || '',
    });
    setEditingId(item.idJenisPermohonan);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus data ini?')) {
      try {
        await api.delete(`/jenis-permohonan/${id}`);
        fetchData();
      } catch (err) {
        alert('Gagal hapus data');
      }
    }
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Manajemen Jenis Permohonan</h2>

        <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 mb-6 space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium">Jenis Permohonan</label>
            <input
              type="text"
              value={form.jenisPermohonan}
              onChange={(e) => setForm({ ...form, jenisPermohonan: e.target.value })}
              required
              className="w-full border p-2 rounded mt-1"
              placeholder="Contoh: Baru / Perpanjangan"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Keterangan</label>
            <input
              type="text"
              value={form.keterangan}
              onChange={(e) => setForm({ ...form, keterangan: e.target.value })}
              className="w-full border p-2 rounded mt-1"
              placeholder="Keterangan tambahan (opsional)"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingId ? 'Update' : 'Simpan'}
          </button>
        </form>

        <div className="overflow-x-auto">
          <table className="table-auto w-full text-sm border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">No</th>
                <th className="border p-2">Jenis Permohonan</th>
                <th className="border p-2">Keterangan</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.idJenisPermohonan}>
                  <td className="border p-2 text-center">{index + 1}</td>
                  <td className="border p-2">{item.jenisPermohonan}</td>
                  <td className="border p-2">{item.keterangan}</td>
                  <td className="border p-2 text-center space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.idJenisPermohonan)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    Belum ada data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default JenisPermohonanList;
