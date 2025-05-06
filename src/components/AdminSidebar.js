import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  Bell, 
  HelpCircle, 
  Database, 
  ChevronDown, 
  ChevronRight,
  Layers,
  FileCheck
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState({
    reports: false,
    settings: false
  });

  const handleToggle = (section) => {
    setExpanded({
      ...expanded,
      [section]: !expanded[section]
    });
  };

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: 'Jenis Permohonan',
      path: '/admin/jenis-permohonan',
      icon: <FileText size={18} />,
    },
    {
      name: 'Pengguna',
      path: '/admin/users',
      icon: <Users size={18} />,
    },
    {
      name: 'Data Master',
      icon: <Database size={18} />,
      isDropdown: true,
      section: 'reports',
      items: [
        { name: 'Kategori', path: '/admin/categories' },
        { name: 'Status', path: '/admin/status' },
        { name: 'Dokumen', path: '/admin/documents' }
      ]
    },
    {
      name: 'Laporan',
      icon: <Layers size={18} />,
      isDropdown: true,
      section: 'settings',
      items: [
        { name: 'Permohonan Masuk', path: '/admin/reports/new' },
        { name: 'Permohonan Selesai', path: '/admin/reports/completed' },
        { name: 'Statistik', path: '/admin/reports/statistics' }
      ]
    },
    {
      name: 'Verifikasi',
      path: '/admin/verification',
      icon: <FileCheck size={18} />,
    },
    {
      name: 'Pengaturan',
      path: '/admin/settings',
      icon: <Settings size={18} />,
    },
    {
      name: 'Bantuan',
      path: '/admin/help',
      icon: <HelpCircle size={18} />,
    }
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen shadow-lg flex flex-col">
      {/* Logo dan Title */}
      <div className="p-5 border-b border-gray-800">
        <div className="flex items-center justify-center">
          <div className="bg-blue-600 rounded-lg p-2 mr-2">
            <LayoutDashboard size={22} />
          </div>
          <h2 className="text-xl font-bold">TapaTupa</h2>
        </div>
        <p className="text-xs text-gray-400 text-center mt-1">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => (
            item.isDropdown ? (
              <div key={item.name} className="mb-1">
                <button
                  onClick={() => handleToggle(item.section)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm rounded hover:bg-gray-800 transition"
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-gray-400">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  {expanded[item.section] ? 
                    <ChevronDown size={16} /> : 
                    <ChevronRight size={16} />
                  }
                </button>
                
                {expanded[item.section] && (
                  <div className="mt-1 ml-6 pl-3 border-l border-gray-700">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={`flex items-center px-3 py-2 text-sm rounded hover:bg-gray-800 transition ${
                          location.pathname === subItem.path ? 'bg-gray-800 text-blue-400' : 'text-gray-400'
                        }`}
                      >
                        <span>{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 text-sm rounded hover:bg-gray-800 transition ${
                  location.pathname === item.path ? 'bg-gray-800 text-blue-400' : 'text-gray-400'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            )
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center px-3 py-2 text-sm rounded bg-gray-800">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
            <span className="font-semibold">A</span>
          </div>
          <div>
            <div className="font-medium">Admin</div>
            <div className="text-xs text-gray-400">Administrator</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;