
import './Beranda.css'
import React, { useEffect } from "react";// ⬅️ Tambahkan ini
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // 
import { BubbleChat } from "flowise-embed-react";

export default function Beranda() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false,
    easing: "ease-in-out", // transisi lebih smooth
    offset: 100,});
  }, []);

  const { t, i18n } = useTranslation(); // 🔹 Hook i18n
  
    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang);
    };

  return (
  <div>
    
    <div className="features-section py-5 " data-aos="fade-up">
  <div className="container">

    <div className="row text-center gy-5">
      {/* Fitur 1 */}
      <div className="col-md-6 col-lg-3">
        <div className="p-4 border-0 bg-white h-100 shadow-sm rounded-3">
          <i className="bi bi-people fs-1 text-success mb-3"></i>
          <h5 className="fw-bold">Safety Training</h5>
          <p className="text-muted small">
            Training dan Konsultan K3 Lainnya...
          </p>
        </div>
      </div>

      {/* Fitur 2 */}
      <div className="col-md-6 col-lg-3">
        <div className="p-4 border-0 bg-white h-100 shadow-sm rounded-3">
          <i className="bi bi-arrow-repeat fs-1 text-success mb-3"></i>
          <h5 className="fw-bold">Training SDM</h5>
          <p className="text-muted small">
            Soft Skill, Leadership, Management, Tim Building, ITC.
          </p>
        </div>
      </div>

      {/* Fitur 3 */}
      <div className="col-md-6 col-lg-3">
        <div className="p-4 border-0 bg-white h-100 shadow-sm rounded-3">
          <i className="bi bi-life-preserver fs-1 text-success mb-3"></i>
          <h5 className="fw-bold">Divisi Consultant</h5>
          <p className="text-muted small">
            Konsultan Perencanaan & Tata Ruang, Survey & Teknologi IT.
          </p>
        </div>
      </div>

      {/* Fitur 4 */}
      <div className="col-md-6 col-lg-3">
        <div className="p-4 border-0 bg-white h-100 shadow-sm rounded-3">
          <i className="bi bi-currency-dollar fs-1 text-success mb-3"></i>
          <h5 className="fw-bold">Event Organizer</h5>
          <p className="text-muted small">
            Corporate Event, Family Gathering, Publikasi & Promosi.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* Bagian About */}
<div className="container mt-5 py-5" data-aos="fade-up">
  <div className="row align-items-center">
    {/* Kolom Gambar - Sebelah Kiri */}
    <div className="col-md-6 text-center mb-4 mb-md-0">
      <img
        src="/image/Capture.JPG"
        className="img-fluid rounded shadow-lg w-100"
        alt="Tentang Geo Mandiri Kreasi"
      />
    </div>

    {/* Kolom Teks - Sebelah Kanan */}
    <div className="col-md-6">
      <h2 className="fw-bold mb-3">Selamat Datang Di Geo Mandiri Kreasi</h2>
      <p className="text-muted mb-4">
        PT Geo Mandiri Kreasi adalah perusahaan yang bergerak di bidang 
        <strong> konsultasi, pelatihan, dan jasa inspeksi terkait 
        Keselamatan dan Kesehatan Kerja (K3) serta konstruksi</strong>. 
        Sebagai badan usaha resmi dan tersertifikasi, kami berkomitmen untuk 
        mendukung terciptanya lingkungan kerja yang aman, efisien, dan sesuai regulasi.
      </p>

      {/* Daftar dengan ikon centang */}
      <ul className="list-unstyled mb-4">
        <li className="d-flex align-items-start mb-2">
          <i className="bi bi-check2 text-success me-2 fs-5"></i>
          <span>Terdaftar sebagai <strong>PJK3 resmi</strong> dan anggota INKINDO DKI Jakarta</span>
        </li>
        <li className="d-flex align-items-start mb-2">
          <i className="bi bi-check2 text-success me-2 fs-5"></i>
          <span>Menyediakan <strong>pelatihan K3 bersertifikasi Kemenaker RI</strong></span>
        </li>
        <li className="d-flex align-items-start mb-2">
          <i className="bi bi-check2 text-success me-2 fs-5"></i>
          <span>Layanan <strong>konsultasi dan inspeksi K3</strong> terpercayan</span>
        </li>
        <li className="d-flex align-items-start">
          <i className="bi bi-check2 text-success me-2 fs-5"></i>
          <span>Berorientasi pada <strong>keselamatan, kualitas, dan kepatuhan</strong></span>
        </li>
      </ul>
    </div>
  </div>
</div>


    {/* Bagian Info K3 */}
<div
  className="container-fluid py-5"
  style={{
    background: "linear-gradient(135deg, #006d3b, #009e60)", // gradasi hijau
    color: "#fff",
  }}
  data-aos="fade-up"
>
  <div className="container">
    <div className="row align-items-center g-4">
      {/* Kolom Kiri - Teks */}
      <div className="col-lg-6">
        <small className="fw-semibold text-light opacity-75">
          Pelatihan & Sertifikasi
        </small>
        <h1 className="text-start fw-bold mt-2 text-light" style={{ lineHeight: "1.2" }}>
          INFORMASI PELATIHAN K3 SERTIFIKASI KEMNAKER & BNSP
        </h1>
        <p className="mt-4" style={{ lineHeight: "1.8", color: "#e0f2e9" }}>
          Setiap perusahaan di Indonesia wajib menerapkan K3 di lingkungan
          kerjanya. Kini, pelatihan dan sertifikasi K3 juga dapat dilakukan
          secara online, seperti yang diselenggarakan oleh{" "}
          <span className="fw-semibold text-white">PT GEO MANDIRI KREASI</span> di
          Jakarta.
        </p>

        <p style={{ lineHeight: "1.8", color: "#e0f2e9" }}>
          Pelatihan ini membantu tenaga kerja memahami dan menerapkan prinsip
          keselamatan serta kesehatan kerja di berbagai bidang industri — mulai
          dari ahli K3, operator, hingga teknisi.
        </p>

        <div className="mt-4">
          <Link
            to="/pendaftaran"
            className="btn fw-semibold px-4 py-2 rounded-1 shadow-sm"
            style={{
              backgroundColor: "#fff",
              color: "#006d3b",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#004d2c";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#006d3b";
            }}
          >
            Daftar Pelatihan Sekarang
          </Link>
        </div>
      </div>

      {/* Kolom Kanan - Gambar Kolase */}
      <div className="col-lg-6">
        <div className="row g-3">
          <div className="col-6">
            <img
              src="image/foto-geo.jpg"
              className="img-fluid rounded-3 shadow-sm"
              alt="Pelatihan K3"
            />
            <img
              src="image/foto-geo-6.jpg"
              className="img-fluid rounded-3 shadow-sm mt-3"
              alt="Pelatihan K3"
            />
          </div>
          <div className="col-6">
            <img
              src="image/foto-geo-2.jpg"
              className="img-fluid rounded-3 shadow-sm mb-3"
              alt="K3 Safety"
            />
            <img
              src="image/foto-geo-4.jpg"
              className="img-fluid rounded-3 shadow-sm"
              alt="Worker"
            />
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Testimoni */}
<div className="container my-5 py-5" data-aos="fade-up">
  <div className="text-center mb-5">
    <h2 className="fw-bold text-dark">TESTIMONIALS</h2>
    <p className="text-muted">Pendapat Klien Kami</p>
  </div>

  <div className="row g-4">
    {/* Testimoni 1 */}
    <div className="col-md-6 col-lg-6">
      <div className="testimonial-box p-4 bg-white shadow-sm h-100">
        <p className="text-secondary mb-4">
          “Gabungan teori dan praktek membuat pelatihan menjadi menarik
          dan berkesan serta alat untuk prakteknya lengkap sehingga
          ketika ujian saya bisa kerjakan dengan lancar.”
        </p>
        <div className="d-flex align-items-center">
          <img
            src="/image/orang.JPG"
            alt="foto"
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h6 className="mb-0 fw-bold">Dita L. Fajarwati</h6>
            <small className="text-muted">PT. Bintang Toedjoe</small>
          </div>
        </div>
      </div>
    </div>

    {/* Testimoni 2 */}
    <div className="col-md-6 col-lg-6">
      <div className="testimonial-box p-4 bg-white shadow-sm h-100">
        <p className="text-secondary mb-4">
          “Instruktur sangat berpengalaman di bidangnya, membuat pelatihan
          P3K yang saya ikuti menjadi sangat menyenangkan dan mendapat ilmu
          yang luar biasa”
        </p>
        <div className="d-flex align-items-center">
          <img
            src="/image/orang-2.JPG"
            alt="foto"
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h6 className="mb-0 fw-bold">Lutfi Ulpah</h6>
            <small className="text-muted">PT. Happy indonesia</small>
          </div>
        </div>
      </div>
    </div>

    {/* Testimoni 3 */}
    <div className="col-md-6 col-lg-6">
      <div className="testimonial-box p-4 bg-white shadow-sm h-100">
        <p className="text-secondary mb-4">
          “Ruangan dan tempat pelatiihan strategis,
          mudah dijangkau oleh transportasi.”
        </p>
        <div className="d-flex align-items-center">
          <img
            src="/image/orang-3.JPG"
            alt="foto"
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h6 className="mb-0 fw-bold">Sodikin</h6>
            <small className="text-muted">PT. Tetsu Sarana Persada</small>
          </div>
        </div>
      </div>
    </div>

    {/* Testimoni 4 */}
    <div className="col-md-6 col-lg-6">
      <div className="testimonial-box p-4 bg-white shadow-sm h-100">
        <p className="text-secondary mb-4">
          “Training seperti ini mesti harus banyak di lakukan agar SDM
          menjadi lebih berkualitas.”
        </p>
        <div className="d-flex align-items-center">
          <img
            src="/image/orang-4.JPG"
            alt="foto"
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h6 className="mb-0 fw-bold">Pujo Warsito</h6>
            <small className="text-muted">PT. Triteguh Manunggal Sejati</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Bagian Jadwal Training (Preview) */}
{/* Bagian Jadwal Training */}
<div className="container py-5" data-aos="fade-up">
  <div className="text-center mb-5">
    <h2 className="fw-bold text-dark">Jadwal Training Kami</h2>
    <p className="text-muted">Pilih bidang pelatihan sesuai kebutuhan Anda</p>
  </div>

  <div className="row gy-4 justify-content-center">
    {/* Baris pertama: 3 bidang */}
    <div className="col-md-4">
      <div className="p-4 shadow-sm bg-white rounded-3 text-center h-100">
        <i className="bi bi-building-gear fs-1 text-primary mb-3"></i>
        <h5 className="fw-bold">Bidang Elevator dan Eskalator</h5>
        <p className="text-muted">Pelatihan teknis untuk instalasi, perawatan, dan inspeksi elevator serta eskalator.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="p-4 shadow-sm bg-white rounded-3 text-center h-100">
        <i className="bi bi-fire fs-1 text-danger mb-3"></i>
        <h5 className="fw-bold">Bidang Penanggulangan Kebakaran</h5>
        <p className="text-muted">Pelatihan keselamatan kerja dan sistem proteksi kebakaran industri.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="p-4 shadow-sm bg-white rounded-3 text-center h-100">
        <i className="bi bi-hammer fs-1 text-warning mb-3"></i>
        <h5 className="fw-bold">Bidang Konstruksi dan Bangunan</h5>
        <p className="text-muted">Peningkatan kompetensi pekerja di bidang konstruksi dan pengawasan bangunan.</p>
      </div>
    </div>

    {/* Baris kedua: 2 bidang, ditengah */}
    <div className="col-md-4">
      <div className="p-4 shadow-sm bg-white rounded-3 text-center h-100">
        <i className="bi bi-gear-wide-connected fs-1 text-success mb-3"></i>
        <h5 className="fw-bold">Bidang Pesawat Angkat dan Pesawat Angkut</h5>
        <p className="text-muted">Pelatihan operator dan teknisi alat berat, crane, serta sistem angkut industri.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="p-4 shadow-sm bg-white rounded-3 text-center h-100">
        <i className="bi bi-lightning-charge fs-1 text-info mb-3"></i>
        <h5 className="fw-bold">Bidang Pesawat Tenaga dan Produksi</h5>
        <p className="text-muted">Pelatihan penggunaan dan perawatan mesin produksi serta sistem tenaga industri.</p>
      </div>
    </div>
  </div>


  <div className="text-center mt-3">
    <Link
      to="/jadwal-training"
      className="btn btn-success px-5 py-2 fw-semibold shadow-sm"
      style={{
        backgroundColor: "#006d3b",
        borderRadius: "6px",
        transition: "0.3s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#004d2c")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#006d3b")}
    >
      Lihat Jadwal Lengkap
    </Link>
  </div>
</div>


{/* Bagian Partner / Klien */}
<div className="container-fluid py-5" data-aos="fade-up" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="text-center mb-5">
    <h2 className="fw-bold text-dark">We are proud to work with these companies</h2>
  </div>

  {/* Wrapper animasi */}
  <div className="logo-slider">
    <div className="slide-track">
      {/* Ulang logo 2x supaya looping-nya halus */}
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          <div className="slide"><img src="/image/pt.png" alt="Logo 1" /></div>
          <div className="slide"><img src="/image/pt3.JPG" alt="Logo 2" /></div>
          <div className="slide"><img src="/image/pt4.JPG" alt="Logo 3" /></div>
          <div className="slide"><img src="/image/pt5.JPG" alt="Logo 4" /></div>
          <div className="slide"><img src="/image/pt6.JPG" alt="Logo 5" /></div>
          <div className="slide"><img src="/image/pt7.JPG" alt="Logo 6" /></div>
          
        </React.Fragment>
      ))}
    </div>
  </div>

  <BubbleChat
          chatflowid="15d4ddd1-7c84-4ab9-9900-47340558cf13"
          apiHost="https://cloud.flowiseai.com"
          theme={{
            button: {
              backgroundColor: "#006d3b",
              iconColor: "#FFFFFF",
            },
          }}
        />
</div>


</div>



  )}

