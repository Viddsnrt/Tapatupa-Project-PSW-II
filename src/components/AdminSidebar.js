import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 space-y-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/admin/jenis-permohonan" className="hover:bg-gray-700 px-2 py-1 rounded">
          Jenis Permohonan
        </Link>
        {/* Tambahkan menu lain di sini */}
      </nav>
    </div>
  );
};

export default AdminSidebar;
