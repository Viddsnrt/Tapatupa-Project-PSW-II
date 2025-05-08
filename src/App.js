import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JenisPermohonanList from './pages/admin/JenisPermohonanList';
import JenisJangkaWaktuList from './pages/admin/JenisJangkaWaktu/List';
import JenisJangkaWaktuForm from './pages/admin/JenisJangkaWaktu/Form';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Jenis Permohonan */}
        <Route path="/admin/jenis-permohonan" element={<JenisPermohonanList />} />

        {/* Jenis Jangka Waktu */}
        <Route path="/admin/jenis-jangka-waktu" element={<JenisJangkaWaktuList />} />
        <Route path="/admin/jenis-jangka-waktu/tambah" element={<JenisJangkaWaktuForm />} />
        <Route path="/admin/jenis-jangka-waktu/edit/:id" element={<JenisJangkaWaktuForm />} />
      </Routes>
    </Router>
  );
};

export default App;
