// src/pages/admin/JenisJangkaWaktu/Form.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../api/api';
import AdminLayout from '../../../layouts/AdminLayout';

const JenisJangkaWaktuForm = () => {
  const [form, setForm] = useState({
    jenisJangkaWaktu: '',
    keterangan: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = !!id;

  useEffect(() => {
    if (isEdit) {
      api.get(`/jenis-jangka-waktu/${id}`).then((res) => {
        setForm({
          jenisJangkaWaktu: res.data.jenisJangkaWaktu,
          keterangan: res.data.keterangan || ''
        });
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await api.put(`/jenis-jangka-waktu/${id}`, form);
      } else {
        await api.post('/jenis-jangka-waktu', form);
      }
      navigate('/admin/jenis-jangka-waktu');
    } catch (err) {
      alert('Gagal menyimpan data');
    }
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">
          {isEdit ? 'Edit' : 'Tambah'} Jenis Jangka Waktu
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <label className="block mb-1 font-medium">Jenis Jangka Waktu</label>
            <input
              type="text"
              className="border w-full p-2"
              value={form.jenisJangkaWaktu}
              onChange={(e) => setForm({ ...form, jenisJangkaWaktu: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Keterangan</label>
            <textarea
              className="border w-full p-2"
              value={form.keterangan}
              onChange={(e) => setForm({ ...form, keterangan: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Simpan
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default JenisJangkaWaktuForm;
