import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/TAPATUPA.png';
import { LayoutDashboard, FileText, Users, Settings, HelpCircle, Database, Layers, FileCheck } from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={18} /> },
    { name: 'Jenis Permohonan', path: '/admin/jenis-permohonan', icon: <FileText size={18} /> },
    { name: 'Wajib Retribusi', path: '/admin/wajib-retribusi', icon: <Users size={18} /> },
    { name: 'Permohonan Sewa', path: '/admin/permohonan-sewa', icon: <FileCheck size={18} /> },
    { name: 'Status', path: '/admin/status', icon: <Layers size={18} /> },
    { name: 'Peruntukan Sewa', path: '/admin/peruntukan-sewa', icon: <Layers size={18} /> },
    { name: 'Jenis Jangka Waktu', path: '/admin/jenis-jangka-waktu', icon: <Database size={18} /> },
    { name: 'Jenis Status', path: '/admin/jenis-status', icon: <Database size={18} /> },
    { name: 'Jenis Objek Retribusi', path: '/admin/jenis-objek-retribusi', icon: <Database size={18} /> },
    { name: 'Jenis Retribusi', path: '/admin/jenis-retribusi', icon: <Database size={18} /> },
    { name: 'Lokasi Objek Retribusi', path: '/admin/lokasi-objek-retribusi', icon: <Database size={18} /> },
    { name: 'Objek Retribusi', path: '/admin/objek-retribusi', icon: <Database size={18} /> },
    { name: 'Tarif Objek Retribusi', path: '/admin/tarif-objek-retribusi', icon: <Database size={18} /> },
    { name: 'Pengaturan', path: '/admin/settings', icon: <Settings size={18} /> },
    { name: 'Bantuan', path: '/admin/help', icon: <HelpCircle size={18} /> }
  ];

  return (
    <div className="sidebar">
      <div className="logo text-center mb-5">
        <img src={logo} alt="Logo" />
        <p className="text-sm text-gray-300">Admin Panel</p>
      </div>
      <nav>
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`menu-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <div className="user-profile text-gray-300">
        <img src="https://via.placeholder.com/35" alt="User Avatar" />
        <div>
          <div className="font-semibold text-sm">Admin</div>
          <div className="text-xs">Administrator</div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
