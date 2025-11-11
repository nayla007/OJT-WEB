import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import PelatihanK3 from "./pages/PelatihanK3";
import JadwalTraining from "./pages/JadwalTraining";
import Pendaftaran from "./pages/Pendaftaran";
import Footer from "./components/Footer";
import "./Home.css";
import "./components/Navbar.css";
import "./components/Table.css";
import "./components/Footer.css";


function Home() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="main-content">
            <Routes>
              {/* Halaman jadwal training */}
              <Route path="/beranda" element={<Beranda/>}/>
              <Route path="/pelatihan-k3" element={<PelatihanK3/>}/>
              <Route path="/jadwal-training" element={<JadwalTraining />} />
              <Route path="/pendaftaran" element={<Pendaftaran />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Home;
