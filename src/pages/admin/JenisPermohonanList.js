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
      <div className="forest-theme">
        <style>{`
          .forest-theme {
            padding: 30px;
            font-family: 'Segoe UI', sans-serif;
            background-color: #e6ffe6;
            min-height: 100vh;
            color: #2f4f4f;
          }

          h2 {
            font-size: 26px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #006400;
          }

          .form-container {
            background-color: #d0f0c0;
            padding: 20px;
            border-left: 5px solid #228b22;
            border-radius: 8px;
            margin-bottom: 30px;
            max-width: 500px;
          }

          .form-container label {
            font-weight: bold;
            display: block;
            margin-top: 10px;
            color: #2e8b57;
          }

          .form-container input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #8fbc8f;
            border-radius: 4px;
            background-color: #f0fff0;
          }

          .form-container button {
            margin-top: 15px;
            background-color: #228b22;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
          }

          .form-container button:hover {
            background-color: #006400;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            background-color: #f5fff5;
            box-shadow: 0 0 8px rgba(34,139,34,0.2);
          }

          thead {
            background-color: #2e8b57;
            color: white;
          }

          th, td {
            padding: 12px;
            border: 1px solid #c1e1c1;
            text-align: center;
          }

          .btn-edit {
            background-color: #66bb6a;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 5px;
          }

          .btn-edit:hover {
            background-color: #388e3c;
          }

          .btn-delete {
            background-color: #c62828;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .btn-delete:hover {
            background-color: #a10000;
          }

          .no-data {
            padding: 20px;
            color: #6b8e23;
            text-align: center;
          }
        `}</style>

        <h2>🌲 Manajemen Jenis Permohonan</h2>

        <form onSubmit={handleSubmit} className="form-container">
          <label>Jenis Permohonan</label>
          <input
            type="text"
            value={form.jenisPermohonan}
            onChange={(e) => setForm({ ...form, jenisPermohonan: e.target.value })}
            required
            placeholder="Contoh: Permohonan Baru"
          />

          <label>Keterangan</label>
          <input
            type="text"
            value={form.keterangan}
            onChange={(e) => setForm({ ...form, keterangan: e.target.value })}
            placeholder="Keterangan tambahan (opsional)"
          />

          <button type="submit">
            {editingId ? 'Update Data' : 'Simpan'}
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Jenis Permohonan</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.idJenisPermohonan}>
                  <td>{index + 1}</td>
                  <td>{item.jenisPermohonan}</td>
                  <td>{item.keterangan}</td>
                  <td>
                    <button className="btn-edit" onClick={() => handleEdit(item)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(item.idJenisPermohonan)}>Hapus</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-data">Tidak ada data tersedia</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default JenisPermohonanList;
