import React, { useState, useEffect } from "react";
import Table from "../component/Table";
import "./JadwalTraining.css";
import axios from "axios";
import JadwalPDF from "../document/jadwal_training.pdf";
import { useTranslation } from "react-i18next";

function JadwalTraining() {
  const { t, i18n } = useTranslation();
  const [jadwalData, setJadwalData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJadwal, setSelectedJadwal] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    jmlHari: "",
    bidang: "",
  });

  // 🔹 Ambil data dari backend
  const fetchData = () => {
    axios
      .get("http://localhost:5000/api/jadwal")
      .then((res) => {
        console.log("Data dari backend:", res.data);
        setJadwalData(res.data);
      })
      .catch((err) => {
        console.error("Gagal fetch data:", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 Filter berdasarkan bidang
  const filterByBidang = (keyword) => {
    return jadwalData.filter((item) =>
      item.bidang.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  return (
    <div className="data-training">
      <h1>Jadwal Training PT. Geo Mandiri Kreasi</h1>

      <a className="download-jadwal" href={JadwalPDF} download>
        Download Jadwal Training 2025
      </a>

      {/* Semua tabel bidang */}
      <div className="container mb-3 mt-5">
        <h3>Bidang Elevator dan Eskalator</h3>
        <Table data={filterByBidang("Elevator")}/>
      </div>

      <div className="container">
        <h3>Bidang Penanggulangan Kebakaran</h3>
        <Table data={filterByBidang("Kebakaran")}/>
      </div>

      <div className="container">
        <h3>Bidang Konstruksi dan Bangunan</h3>
        <Table data={filterByBidang("Konstruksi")}/>
      </div>

      <div className="container">
        <h3>Bidang Pesawat Angkat dan Pesawat Angkut</h3>
        <Table data={filterByBidang("Pesawat Angkat")}/>
      </div>

      <div className="container">
        <h3>Bidang Pesawat Tenaga dan Produksi</h3>
        <Table data={filterByBidang("Pesawat Tenaga")}/>
      </div>

      <div className="container">
        <h3>Bidang Pesawat Uap, Bejana Tekanan & Tangki Timbun</h3>
        <Table data={filterByBidang("Pesawat Uap")}/>
      </div>

      <div className="container">
        <h3>Bidang Pengelasan</h3>
        <Table data={filterByBidang("Pengelasan")}/>
      </div>
    </div>
  );
}

export default JadwalTraining;