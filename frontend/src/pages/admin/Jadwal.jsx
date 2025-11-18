import React, { useState, useEffect } from "react";
import Table from "../../component/admin/Tabel";
// import "./JadwalTraining.css";
import axios from "axios";
import JadwalPDF from "../../document/jadwal_training.pdf";
import { useTranslation } from "react-i18next";

function Jadwal() {
  const [jadwalData, setJadwalData] = useState([]);
  const [pelatihanData, setPelatihanData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedJadwal, setSelectedJadwal] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    jmlHari: "",
    bidang: "",
    id_pelatihan: "",
  });

  // Ambil semua jadwal
  const fetchData = async () => {
    try {
      const res = await axios.get("https://api.geomandirikreasi.pblweb0201.cloud/api/jadwal");
      setJadwalData(res.data);
    } catch (err) {
      console.error("Gagal fetch data:", err);
    }
  };

  // Ambil data pelatihan
  const fetchPelatihan = async () => {
    try {
      const res = await axios.get("https://api.geomandirikreasi.pblweb0201.cloud/daftar-pelatihan");
      const data = res.data.map((p) => ({ id: p.id_pelatihan, nama: p.nama_pelatihan }));
      setPelatihanData(data);
    } catch (err) {
      console.error("Gagal fetch pelatihan:", err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchPelatihan();
  }, []);

  // Tambah jadwal
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.id_pelatihan) {
      alert("Silakan pilih pelatihan!");
      return;
    }

    try {
      await axios.post("https://api.geomandirikreasi.pblweb0201.cloud/api/jadwal", {
        ...formData,
        harga: Number(formData.harga),
        jmlHari: Number(formData.jmlHari),
        id_pelatihan: Number(formData.id_pelatihan),
      });
      alert("Data berhasil ditambahkan!");
      setFormData({ nama: "", harga: "", jmlHari: "", bidang: "", id_pelatihan: "" });
      setShowModal(false);
      fetchData();
    } catch (err) {
      console.error("Gagal menambah data:", err.response?.data || err);
      alert("Gagal menambah data.");
    }
  };

  // Edit jadwal
  const handleEditClick = (item) => {
    setSelectedJadwal(item);
    setFormData({
      nama: item.nama,
      harga: item.harga,
      jmlHari: item.jmlHari,
      bidang: item.bidang,
      id_pelatihan: item.id_pelatihan,
    });
    setShowEditModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://api.geomandirikreasi.pblweb0201.cloud/api/jadwal/${selectedJadwal.id}`, {
        ...formData,
        harga: Number(formData.harga),
        jmlHari: Number(formData.jmlHari),
        id_pelatihan: Number(formData.id_pelatihan),
      });
      alert("Data berhasil diupdate!");
      setShowEditModal(false);
      setFormData({ nama: "", harga: "", jmlHari: "", bidang: "", id_pelatihan: "" });
      fetchData();
    } catch (err) {
      console.error("Gagal update data:", err.response?.data || err);
      alert("Gagal update data.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;
    try {
      await axios.delete(`https://api.geomandirikreasi.pblweb0201.cloud/api/jadwal/${id}`);
      // langsung hapus di state
      setJadwalData((prev) => prev.filter((item) => item.id !== Number(id)));
      alert("Data berhasil dihapus!");
    } catch (err) {
      console.error("Gagal hapus data:", err);
      alert("Gagal menghapus data.");
    }
  };

  const tanggalPerBulan = {
  Januari:["20-28"],Februari:["11-15"],Maret:["17-24"],April:["01-07"],
  Mei:["08-17"],Juni:["10-18"],Juli:["18-27"],Agustus:["16-28"],
  September:["05-15"],Oktober:["24-30"],November:["11-19"],Desember:["03-09"],
};

const handleBulanChange = (id, bulan) => {
  setJadwalData(prev => 
    prev.map(item =>
      item.id === id
        ? { ...item, bulan, tanggal: tanggalPerBulan[bulan]?.join(",") || "" }
        : item
    )
  );
};

  // Filter bidang
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

      {/* Tombol Tambah Data */}
      <div className="text-end mb-3 container">
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          + Tambah Jadwal
        </button>
      </div>

      {/* Semua tabel bidang */}
      <div className="container mb-3 mt-5">
        <h3>Bidang Elevator dan Eskalator</h3>
        <Table data={filterByBidang("Elevator")} onDelete={handleDelete} onEdit={handleEditClick} onBulanChange={handleBulanChange}/>
      </div>

      <div className="container">
        <h3>Bidang Penanggulangan Kebakaran</h3>
        <Table data={filterByBidang("Kebakaran")} onDelete={handleDelete} onEdit={handleEditClick} onBulanChange={handleBulanChange}/>
      </div>

      <div className="container">
        <h3>Bidang Konstruksi dan Bangunan</h3>
        <Table data={filterByBidang("Konstruksi")} onDelete={handleDelete} onEdit={handleEditClick} onBulanChange={handleBulanChange}/>
      </div>

      <div className="container">
        <h3>Bidang Pesawat Angkat dan Pesawat Angkut</h3>
        <Table data={filterByBidang("Pesawat Angkat")} onDelete={handleDelete} onEdit={handleEditClick} onBulanChange={handleBulanChange}/>
      </div>

      <div className="container">
        <h3>Bidang Pesawat Tenaga dan Produksi</h3>
        <Table data={filterByBidang("Pesawat Tenaga")} onDelete={handleDelete} onEdit={handleEditClick} onBulanChange={handleBulanChange}/>
      </div>

      <div className="container">
        <h3>Bidang Pesawat Uap, Bejana Tekanan & Tangki Timbun</h3>
        <Table data={filterByBidang("Pesawat Uap")} onDelete={handleDelete} onEdit={handleEditClick} onBulanChange={handleBulanChange}/>
      </div>

      <div className="container">
        <h3>Bidang Pengelasan</h3>
        <Table data={filterByBidang("Pengelasan")} onDelete={handleDelete} onEdit={handleEditClick} onBulanChange={handleBulanChange}/>
      </div>

      {/* Modal Tambah */}
      {showModal && (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title">Tambah Jadwal Training</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  {["nama", "harga", "jmlHari", "bidang"].map((field) => (
                    <div className="mb-3" key={field}>
                      <label className="form-label text-capitalize">{field}</label>
                      <input
                        type={field === "harga" || field === "jmlHari" ? "number" : "text"}
                        className="form-control"
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        required
                      />
                    </div>
                  ))}
                  <div className="mb-3">
                    <label className="form-label">Pilih Pelatihan</label>
                    <select
                      className="form-select"
                      value={formData.id_pelatihan}
                      onChange={(e) => setFormData({ ...formData, id_pelatihan: e.target.value })}
                      required
                    >
                      <option value="">-- Pilih Pelatihan --</option>
                      {pelatihanData.map((pel) => (
                        <option key={pel.id} value={pel.id}>
                          {pel.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Batal
                  </button>
                  <button type="submit" className="btn btn-primary">Simpan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Modal Edit */}
      <div className={`modal fade ${showEditModal ? "show d-block" : ""}`} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleUpdate}>
              <div className="modal-header">
                <h5 className="modal-title">Edit Jadwal Training</h5>
                <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                {["nama", "harga", "jmlHari", "bidang"].map((field) => (
                  <div className="mb-3" key={field}>
                    <label className="form-label text-capitalize">{field}</label>
                    <input
                      type={field === "harga" || field === "jmlHari" ? "number" : "text"}
                      className="form-control"
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      required
                    />
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  Batal
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>{/* Modal Edit */}
      {showEditModal && (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <form onSubmit={handleUpdate}>
                <div className="modal-header">
                  <h5 className="modal-title">Edit Jadwal Training</h5>
                  <button type="button" className="btn-close" onClick={() => setShowEditModal(false)}></button>
                </div>
                <div className="modal-body">
                  {["nama", "harga", "jmlHari", "bidang"].map((field) => (
                    <div className="mb-3" key={field}>
                      <label className="form-label text-capitalize">{field}</label>
                      <input
                        type={field === "harga" || field === "jmlHari" ? "number" : "text"}
                        className="form-control"
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        required
                      />
                    </div>
                  ))}
                  <div className="mb-3">
                    <label className="form-label">Pilih Pelatihan</label>
                    <select
                      className="form-select"
                      value={formData.id_pelatihan}
                      onChange={(e) => setFormData({ ...formData, id_pelatihan: e.target.value })}
                      required
                    >
                      <option value="">-- Pilih Pelatihan --</option>
                      {pelatihanData.map((pel) => (
                        <option key={pel.id} value={pel.id}>
                          {pel.nama}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                    Batal
                  </button>
                  <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Jadwal;