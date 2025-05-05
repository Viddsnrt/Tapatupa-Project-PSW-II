import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JenisPermohonanList from './pages/admin/JenisPermohonanList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/jenis-permohonan" element={<JenisPermohonanList />} />
        {/* Tambah route admin lain di sini */}
      </Routes>
    </Router>
  );
};

export default App;
