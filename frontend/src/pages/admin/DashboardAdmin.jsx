import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DashboardAdmin() {
  const navigate = useNavigate();

  // 🧠 State buat nampung data asli dari backend
const [dataPendaftar, setDataPendaftar] = useState([]);
const [dataPelatihan, setDataPelatihan] = useState([]);
const [dataPeserta, setDataPeserta] = useState([]);
  const [dataJadwal, setDataJadwal] = useState([]);

  // 🧩 Ambil data dari backend
  useEffect(() => {
    // Ambil data jadwal training (🔥 ini yang penting)
    axios.get("https://api.geomandirikreasi.pblweb0201.cloud/api/jadwal")
      .then(res => setDataJadwal(res.data))
      .catch(err => console.error("Gagal ambil data jadwal:", err));

      // Ambil data data peserta (🔥 ini yang penting)
    axios.get("https://api.geomandirikreasi.pblweb0201.cloud/api/data-pendaftar")
      .then(res => setDataPendaftar(res.data))
      .catch(err => console.error("Gagal ambil data jadwal:", err));

      // 🔹 Ambil data pelatihan (🔥 ini bagian penting)
  axios.get("https://api.geomandirikreasi.pblweb0201.cloud/daftar-pelatihan")
    .then(res => setDataPelatihan(res.data))
    .catch(err => console.error("Gagal ambil data pelatihan:", err));

    // 🔹 Ambil data pelatihan (🔥 ini bagian penting)
  axios.get("https://api.geomandirikreasi.pblweb0201.cloud/api/data-peserta")
    .then(res => setDataPeserta(res.data))
    .catch(err => console.error("Gagal ambil data pelatihan:", err));
  }, []);

//   // Contoh data dummy
//   const dataPendaftar = [
//     { id: 1, nama: "Budi" },
//     { id: 2, nama: "Ani" },
//     { id: 3, nama: "Rian" },
//   ];

//   const dataPelatihan = [
//     { id: 1, nama: "Pelatihan React" },
//     { id: 2, nama: "Pelatihan Node.js" },
//   ];
  // Data card
  const cards = [
    {
      title: "Jumlah Pendaftar",
      count: dataPendaftar.length,
      color: "#007bff",
      icon: "👥",
      link: "/admin/data-pendaftar",
    },
    {
      title: "Jumlah Pelatihan",
      count: dataPelatihan.length,
      color: "#28a745",
      icon: "📘",
      link: "/admin/daftar-pelatihan",
    },
    {
      title: "Data Peserta",
      count: dataPeserta.length,
      color: "#ffc107",
      icon: "📜",
      link: "/admin/data-peserta",
    },
    {
      title: "Jadwal Training",
      count: dataJadwal.length,
      color: "#17a2b8",
      icon: "📅",
      link: "/admin/jadwal-training",
    },
  ];

  return (
    <div
      className="p-4"
      style={{
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <h2 className="fw-bold mb-4 text-dark">📊 Dashboard Admin</h2>

      {/* === 4 Card Statistik === */}
      <Row className="g-4 mb-4">
        {cards.map((card, index) => (
          <Col key={index} md={6} lg={3}>
            <Card
              className="text-center p-4"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "18px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => navigate(card.link)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0, 0, 0, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0, 0, 0, 0.15)";
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: card.color,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  margin: "0 auto 15px",
                  boxShadow: `0 4px 15px ${card.color}80`,
                }}
              >
                {card.icon}
              </div>
              <h6 className="text-muted">{card.title}</h6>
              <h2 className="fw-bold text-dark">{card.count}</h2>
            </Card>
          </Col>
        ))}
      </Row>

      {/* === Ringkasan Data === */}
      <div
        className="mt-3 p-4"
        style={{
          background: "rgba(255,255,255,0.1)",
          borderRadius: "16px",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
        }}
      >
        <h4 className="fw-bold mb-3 text-success">
          📈 Ringkasan Data
        </h4>
        <p style={{ lineHeight: "1.7" }}>
          Total {dataPendaftar.length} pendaftar telah mendaftar untuk {dataPelatihan.length} jenis pelatihan yang tersedia. Saat ini, terdapat {dataPeserta.length} peserta yang sudah dikonfirmasi, dan {dataJadwal.length} jadwal training aktif yang akan datang.

        </p>

        <p style={{ color: "#6c757d" }}>
          Terakhir diperbarui:{" "}
          <span style={{ color: "#00aa66" }}>
            {new Date().toLocaleDateString("id-ID")}
          </span>
        </p>
      </div>
    </div>
  );
}
