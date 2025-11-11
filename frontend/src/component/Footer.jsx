import logo from "../assets/Logo Group.png";
import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
      Aos.init({ duration: 1000, once: false,
      easing: "ease-in-out", // transisi lebih smooth
      offset: 100,});
    }, []);

  return (
    <footer
      className="text-light pt-5 pb-3 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #006d3b, #009e60)", // hijau tua toska gelap
      }}
      data-aos="fade-up"
    >
      {/* Dekorasi lingkaran */}
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "100px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      ></div>

      <div className="container position-relative">
        <div className="row gy-3 align-items-start">
          {/* Kolom 1 - Logo & Info */}
          <div className="col-md-4 " style={{ marginTop: "-20px" }}>
            <div className="d-flex align-items-center mb-2">
              <img
                src="/image/logo-geo.png"
                alt="Logo"
                style={{ height: "100px", marginRight: "10px", paddingTop: "10px"}}
              />
              <h5 className="m-0 fw-bold text-light">PT Geo Mandiri Kreasi</h5>
            </div>
            <p className="text-muted-light small mb-4">
              PT Geo Mandiri Kreasi adalah perusahaan yang bergerak di bidang
              konsultan, pelatihan K3, dan event management. Kami berkomitmen
              untuk memberikan pelayanan terbaik dengan profesionalisme tinggi.
            </p>
            <div className="d-flex gap-3 fs-5">
              <a href="https://www.facebook.com/geomandirigroup/" className="text-light" >
                <i className="bi bi-facebook"></i>
              </a>
              <a className="text-light" 
                href="https://www.instagram.com/geomandirigroupcreative/" 
                target="_blank"
                rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://id.linkedin.com/company/pt-geo-mandiri-kreasi" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Kolom 2 - Pusat Pelatihan & Kontak */}
<div className="col-md-4">
  <h6 className="fw-bold text-light mb-3">Pusat Pelatihan</h6>
  <ul className="list-unstyled small text-muted-light">
    <li className="mb-2">
      <span className="text-muted-light">
        Rukan Kaca Hijau, Jl. Raya Jatirwaringin No. 6C
      </span>
    </li>
    <li className="mb-2">
      <strong className="text-light">Telepon:</strong>{" "}
      <a
        href="tel:0218621510"
        className="text-muted-light text-decoration-none"
        onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
        onMouseLeave={(e) => (e.target.style.color = "#aaa")}
      >
        021 862 1510
      </a>
    </li>
    <li className="mb-2">
      <strong className="text-light">Email:</strong>{" "}
      <a
        href="mailto:info@geomandiri.co.id"
        className="text-muted-light text-decoration-none"
        onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
        onMouseLeave={(e) => (e.target.style.color = "#aaa")}
      >
        info@geomandiri.co.id
      </a>
    </li>
  </ul>
</div>


          {/* Kolom 3 - Informasi Singkat */}
          <div className="col-md-4">
            <h6 className="fw-bold text-light mb-3">Info Pelatihan</h6>
            <p className="text-muted-light small">
              Jangan lewatkan info pelatihan & event kami. Kunjungi website kami secara rutin untuk update terbaru.
            </p>
          </div>
        </div>

        {/* Garis bawah */}
        <hr className="border mt-5" />

        {/* Copyright */}
        <div className="text-center text-muted-light small text-light">
          © 2025 PT Geo Mandiri Kreasi. All rights reserved. | Powered by{" "}
          <span style={{ color: "#00bfa5" }}>GeoMandiri</span>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
