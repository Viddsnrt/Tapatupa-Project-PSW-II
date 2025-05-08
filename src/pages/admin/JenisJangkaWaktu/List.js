// src/pages/admin/JenisJangkaWaktu/List.js
import React, { useEffect, useState } from 'react';
import api from '../../../api/api';
import AdminLayout from '../../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

const JenisJangkaWaktuList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.get('/jenis-jangka-waktu');
      setData(res.data);
    } catch (err) {
      console.error('Gagal ambil data', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin hapus data ini?')) {
      await api.delete(`/jenis-jangka-waktu/${id}`);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AdminLayout>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Jenis Jangka Waktu</h2>
          <Link to="/admin/jenis-jangka-waktu/tambah" className="bg-green-600 text-white px-3 py-1 rounded">
            Tambah
          </Link>
        </div>

        <table className="table-auto w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">No</th>
              <th className="border p-2">Jenis</th>
              <th className="border p-2">Keterangan</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4">Belum ada data</td>
              </tr>
            )}
            {data.map((item, index) => (
              <tr key={item.idJenisJangkaWaktu}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{item.jenisJangkaWaktu}</td>
                <td className="border p-2">{item.keterangan}</td>
                <td className="border p-2 space-x-2">
                  <Link
                    to={`/admin/jenis-jangka-waktu/edit/${item.idJenisJangkaWaktu}`}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.idJenisJangkaWaktu)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default JenisJangkaWaktuList;
