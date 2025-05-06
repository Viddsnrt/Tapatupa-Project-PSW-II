import React, { useState } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import { Bell, Search, Menu, X, User, LogOut, Settings } from 'lucide-react';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'Permohonan Baru',
      message: 'Ada permohonan baru yang perlu diproses',
      time: '5 menit yang lalu',
      unread: true
    },
    {
      id: 2,
      title: 'Permohonan Disetujui',
      message: 'Permohonan #12345 telah disetujui',
      time: '1 jam yang lalu',
      unread: false
    },
    {
      id: 3,
      title: 'Pengumuman Sistem',
      message: 'Sistem akan mengalami pemeliharaan pada tanggal 10 Mei',
      time: '3 jam yang lalu',
      unread: false
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden">
        {!sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(true)}
            className="fixed z-30 bottom-4 right-4 p-2 rounded-full bg-blue-600 text-white shadow-lg"
          >
            <Menu size={24} />
          </button>
        )}
        
        {/* Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 transition duration-300 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0`}>
        <AdminSidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow z-10">
          <div className="px-4 sm:px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)} 
                className="mr-4 text-gray-600 lg:hidden"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Cari..." 
                  className="pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm w-48 md:w-64"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Notifications dropdown */}
                {notificationsOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-2 px-3 border-b border-gray-200 flex justify-between items-center">
                      <h3 className="text-sm font-semibold text-gray-700">Notifikasi</h3>
                      <button className="text-xs text-blue-600 hover:text-blue-800">Tandai semua dibaca</button>
                    </div>
                    <div className="max-h-72 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          className={`px-4 py-3 hover:bg-gray-50 transition ${notification.unread ? 'bg-blue-50' : ''}`}
                        >
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                            <span className="text-xs text-gray-500">{notification.time}</span>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                        </div>
                      ))}
                    </div>
                    <div className="py-2 px-3 border-t border-gray-200">
                      <a href="#" className="text-xs text-center block text-blue-600 hover:text-blue-800">Lihat semua notifikasi</a>
                    </div>
                  </div>
                )}
              </div>

              {/* User dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <span className="font-semibold">A</span>
                  </div>
                  <span className="hidden md:inline-block text-sm font-medium text-gray-700">Admin</span>
                </button>

                {/* User dropdown menu */}
                {dropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <a 
                        href="#" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <User size={16} className="mr-3 text-gray-500" />
                        Profil
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Settings size={16} className="mr-3 text-gray-500" />
                        Pengaturan
                      </a>
                      <hr className="my-1" />
                      <a 
                        href="#" 
                        className="flex items-center px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                      >
                        <LogOut size={16} className="mr-3 text-red-500" />
                        Logout
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="px-4 sm:px-6 py-2 bg-gray-50 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              Dashboard / <span className="font-medium text-gray-800">Home</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 sm:p-6">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;