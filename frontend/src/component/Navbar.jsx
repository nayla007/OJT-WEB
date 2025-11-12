import { NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
      Aos.init({ duration: 1000, once: false,
      easing: "ease-in-out", // transisi lebih smooth
      offset: 100,});
    }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🎠 Efek untuk mengaktifkan carousel otomatis
  useEffect(() => {
    const carouselElement = document.querySelector("#heroCarousel");
    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // auto-slide setiap 5 detik
        ride: "carousel", // langsung jalan otomatis
        pause: false, // biar gak berhenti waktu dihover
        wrap: true, // looping terus
      });
    }
  }, []);

  return (
    <div>
      {/* 🔹 Top Bar */}
      <div className="bg-light py-1 border-bottom small" >
        <div className="container d-flex justify-content-between align-items-center">
          
          {/* 🔸 Kiri: Ikon Sosial Media */}
    <div className="d-flex align-items-center">
      <a href="https://www.instagram.com/geomandirigroupcreative/" className="text-dark me-3">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="https://id.linkedin.com/company/pt-geo-mandiri-kreasi" className="text-dark me-3">
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="https://www.facebook.com/geomandirigroup/" className="text-dark me-3">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="#" className="text-dark me-3">
        <i className="bi bi-youtube"></i>
      </a>
    </div>

    {/* 🔸 Kanan: Telepon, Bahasa, Tombol */}
    <div className="d-flex align-items-center">
      {/* Telepon */}
      <a
        href="tel:0218621510"
        className="text-dark me-3 text-decoration-none d-flex align-items-center"
      >
        <i className="bi bi-telephone me-2"></i>
        telp: 021-11-2123-900
      </a>
    </div>
        </div>
      </div>


      {/* 🔹 Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${
          isFixed ? "fixed-top" : ""
        }`}
        style={{
          top: isFixed ? "0" : "auto",
          zIndex: 1030,
          transition: "top 0.3s ease",
          paddingTop: "0.4rem",
          paddingBottom: "0.4rem",
          height: "70px",
        }}
      >
        <div className="container container-scroll">
          {/* 🔸 Logo */}
          <NavLink className="navbar-brand fw-bold text-dark" to="/beranda">
            <img
              src="/image/logo-geo.png"
              alt="Logo"
              style={{
                width: "100px",
                height: "auto",
                marginRight: "2px",
                maxHeight: "200px",
                objectFit: "contain",
              }}
            />
            <span style={{ color: "#006d3b" }}>Geo Mandiri Kreasi</span>
          </NavLink>

          {/* 🔸 Toggler (mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 🔸 Menu items */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarMain">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/beranda"
                  className={({ isActive }) =>
                    `nav-link fw-semibold px-3 ${
                      isActive ? "text-success" : "text-dark"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/jadwal-training"
                  className={({ isActive }) =>
                    `nav-link fw-semibold px-3 ${
                      isActive ? "text-success" : "text-dark"
                    }`
                  }
                >
                  Jadwal Training
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/pelatihan"
                  className={({ isActive }) =>
                    `nav-link fw-semibold px-3 ${
                      isActive ? "text-success" : "text-dark"
                    }`
                  }
                >
                  Pelatihan K3
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/pendaftaran"
                  className={({ isActive }) =>
                    `nav-link fw-semibold px-3 ${
                      isActive ? "text-success" : "text-dark"
                    }`
                  }
                >
                  Pendaftaran
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer biar konten nggak ketutup navbar fixed */}
      {isFixed && <div style={{ height: "80px" }}></div>}

      {/* 🔹 Hero Section */}
      {location.pathname === "/" || location.pathname === "/beranda" ? (
      <div
        id="heroCarousel"
        className="carousel carousel-fade"
        data-bs-ride="carousel"
        data-aos="fade-up"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active ">
            <div
              className="d-flex align-items-center justify-content-center text-center text-light"
              style={{
                height: "90vh",
                backgroundImage:
                  "url('image/carousel-3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 80, 50, 0.6)", // hijau gelap transparan
                }}
              >
                <div className="container ">
                  <h1 className="fw-bold text-light display-4 mb-3 text-uppercase">
                    Mitra Terpercaya dalam Keselamatan dan Kepatuhan K3
                  </h1>
                  <p className="lead mb-4">
                    PT Geo Mandiri Kreasi menyediakan pelatihan K3 bersertifikasi dan 
                    layanan konsultasi untuk memastikan lingkungan kerja 
                    Anda aman dan sesuai regulasi Kemenaker RI.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div
              className="d-flex align-items-center justify-content-center text-center text-light"
              style={{
                height: "90vh",
                backgroundImage:
                  "url('image/carouse-2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 80, 50, 0.6)",
                }}
              >
                <div className="container">
                  <h1 className="fw-bold text-light display-4 mb-3 text-uppercase">
                    Pelatihan K3 Bersertifikat Resmi Kemenaker RI
                  </h1>
                  <p className="lead mb-4">
                    Kami menyelenggarakan berbagai program pelatihan 
                    seperti Ahli K3 Umum, K3 Listrik, 
                    Operator Crane, dan lainnya — 
                    dengan pengajar berpengalaman dan fasilitas lengkap.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div
              className="d-flex align-items-center justify-content-center text-center text-light"
              style={{
                height: "90vh",
                backgroundImage:
                  "url('image/carousel.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(0, 80, 50, 0.6)",
                }}
              >
                <div className="container">
                  <h1 className="fw-bold text-light display-4 mb-3 text-uppercase">
                    Layanan Inspeksi dan Pengujian Peralatan Kerja
                  </h1>
                  <p className="lead mb-4">
                    Tenaga ahli kami melakukan riksa uji peralatan dan lingkungan kerja 
                    untuk memastikan keselamatan dan kepatuhan 
                    terhadap standar nasional dan internasional.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Navigasi panah kiri/kanan */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      ): null}
    </div>
  );

}       