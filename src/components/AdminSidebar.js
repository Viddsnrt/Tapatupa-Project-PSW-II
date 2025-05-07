// src/components/AdminSidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/TAPATUPA.png';
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  HelpCircle,
  Database,
  ChevronDown,
  ChevronRight,
  Layers,
  FileCheck,
  ChevronLeft
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState({
    reports: false,
    settings: false
  });
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
    <div style={{
      width: isOpen ? '16rem' : '4rem',
      height: '100vh',
      backgroundColor: '#0f4b2d',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '2px 0 10px rgba(0,0,0,0.5)',
      position: 'fixed',
      transition: 'width 0.3s',
      zIndex: 100
    }}>
      <style>
        {`
          .nav-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
            border-radius: 0.5rem;
            transition: background 0.2s, color 0.2s;
            color: white !important;
            text-decoration: none;
          }
          .nav-link:hover {
            background-color: rgb(37, 106, 81);
            color: white !important;
          }
          .nav-link.active {
            background-color: #2b7a4c;
            color: white !important;
          }

          .dropdown-subitem {
            display: block;
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
            border-radius: 0.375rem;
            transition: background 0.2s, color 0.2s;
            color: white !important;
            text-decoration: none;
          }
          .dropdown-subitem:hover {
            background-color: #2f6f48;
            color: white !important;
          }
          .dropdown-subitem.active {
            background-color: #2b7a4c;
            color: white !important;
          }
        `}
      </style>

      {/* Header */}
      <div style={{
        padding: '1.25rem',
        borderBottom: '1px solid rgb(55, 81, 60)',
        position: 'sticky',
        top: 0,
        backgroundColor: '#0f4b2d',
        zIndex: 10
      }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <div style={{
        width: isOpen ? '6rem' : '2.5rem',
        height: isOpen ? '6rem' : '2.5rem',
        marginBottom: '0.5rem',
        transition: 'all 0.3s'
      }}>
    <img
    src={logo}
    alt="Logo"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      transition: 'all 0.3s'
       }}
         />
        </div>

        </div>

        <p style={{
          fontSize: '0.75rem',
          color: '#9ca3af',
          textAlign: 'center',
          marginTop: '0.25rem'
        }}>
          Admin Panel
        </p>
      </div>

      {/* Toggle Sidebar Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '-1.5rem',
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: '50%',
          color: '#0f4b2d',
          cursor: 'pointer',
          fontSize: '1.5rem',
          zIndex: 101,
          width: '2rem',
          height: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      {/* Navigation */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '1rem 0.75rem' }}>
        {menuItems.map((item) => (
          item.isDropdown ? (
            <div key={item.name}>
              <button
                onClick={() => handleToggle(item.section)}
                className="nav-link"
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {item.icon}
                  {isOpen && <span>{item.name}</span>}
                </div>
                {expanded[item.section] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {expanded[item.section] && (
                <div style={{ marginLeft: '1.5rem', marginTop: '0.25rem' }}>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className={`dropdown-subitem ${location.pathname === subItem.path ? 'active' : ''}`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          )
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: '1rem', borderTop: '1px solid #1f2937' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#2f6f48',
          padding: '0.5rem 0.75rem',
          borderRadius: '0.5rem'
        }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '9999px',
            backgroundColor: '#34d399',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '0.75rem'
          }}>
            <span style={{ fontWeight: '600' }}>A</span>
          </div>
          {isOpen && (
            <div>
              <div style={{ fontWeight: '500' }}>Admin</div>
              <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Administrator</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
