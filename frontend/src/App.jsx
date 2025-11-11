import React from "react"                                           // import dari 
import "bootstrap/dist/css/bootstrap.min.css"                       // import dari folder bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Routes, Route, useLocation } from "react-router-dom"
import 'bootstrap-icons/font/bootstrap-icons.css';

// import halaman publik
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Beranda from "./pages/Beranda"
import Pelatihan from "./pages/Pelatihan"
import JadwalTraining from "./pages/JadwalTraining"
import Pendaftaran from "./pages/Pendaftaran"
import "./App.css"
import "./component/Navbar.css";
import "./component/Table.css";
import "./component/Footer.css";

// import halaman admin
import AuthPage from "./pages/admin/AuthPage"
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import DataPendaftar from "./pages/admin/DataPendaftar";
import DataPendaftarEdit from "./pages/admin/DataPendaftarEdit";
import DaftarPelatihan from "./pages/admin/DaftarPelatihan";
import DaftarPelatihanCreate from "./pages/admin/DaftarPelatihanCreate";
import DaftarPelatihanEdit from "./pages/admin/DaftarPelatihanEdit";
import KategoriPelatihan from "./pages/admin/KategoriPelatihan";
import KategoriPelatihanCreate from "./pages/admin/KategoriPelatihanCreate";
import KategoriPelatihanEdit from "./pages/admin/KategoriPelatihanEdit";

import AdminApproval from "./pages/admin/AdminApproval";
import AdminNavbar from "./component/admin/AdminNavbar";
import { useAuth } from "./context/AuthContext"

import ProtectedRoute from "./routes/ProtectedRoute";
import SuperAdminRoute from "./routes/SuperAdminRoute";

export default function App() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const isAdminRoute = location.pathname.startsWith('/admin');

  const CurrentNavbar = () => {
  if (isAdminRoute) {
    // Kalau route /admin dan sudah login, tampilkan AdminNavbar
    if (isAuthenticated) {
      return <AdminNavbar />;
    }
    // Kalau route /admin tapi belum login (halaman login admin), jangan tampilkan Navbar user
    return null;
  }

  // Kalau bukan route /admin, tampilkan Navbar user
  return <Navbar />;
};

  return (
    <>
    <CurrentNavbar />
          <Routes>
            {/* Halaman publik*/}
            <Route path="/" element={<Beranda />} />
            <Route path="/beranda" element={<Beranda />} />
            <Route path="/pelatihan" element={<Pelatihan />} />
            <Route path="/jadwal-training" element={<JadwalTraining />} />
            <Route path="/pendaftaran" element={<Pendaftaran />} />
            <Route path="/admin" element={<AuthPage />} />

            {/* halaman hanya admin yg bisa */}
            <Route path="/admin/dashboard" element={<ProtectedRoute>
              <DashboardAdmin />
            </ProtectedRoute>} />
            <Route path="/admin/data-pendaftar" element={<ProtectedRoute>
              <DataPendaftar />
              </ProtectedRoute>} />
            <Route path="/admin/data-pendaftar/edit/:id" element={<ProtectedRoute>
  <DataPendaftarEdit />
</ProtectedRoute>} />
            <Route path="/admin/daftar-pelatihan" element={<ProtectedRoute>
              <DaftarPelatihan />
            </ProtectedRoute>} />
            <Route path="/admin/daftar-pelatihan-create" element={<ProtectedRoute>
              <DaftarPelatihanCreate />
            </ProtectedRoute>} />
            <Route path="/admin/daftar-pelatihan-edit/:id" element={<ProtectedRoute>
  <DaftarPelatihanEdit />
</ProtectedRoute>} />
            <Route path="/admin/kategori-pelatihan" element={<ProtectedRoute>
              <KategoriPelatihan />
            </ProtectedRoute>} />
            <Route path="/admin/kategori-pelatihan-create" element={<ProtectedRoute>
              <KategoriPelatihanCreate />
            </ProtectedRoute>} />
            <Route path="/admin/kategori-pelatihan-edit/:id" element={<ProtectedRoute>
  <KategoriPelatihanEdit />
</ProtectedRoute>} />

            {/* halaman khusus superadmin */}
            <Route path="/admin/approval" element={<SuperAdminRoute>
              <AdminApproval />
            </SuperAdminRoute>} />
        </Routes>
        {/* Footer selalu tampil */}
      {!isAdminRoute && <Footer />}
          </>
  )
}