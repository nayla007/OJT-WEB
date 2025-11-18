
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"; // ⬅️ tambahkan ini
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const API_URL = "https://api.geomandirikreasi.pblweb0201.cloud/api/data-pendaftar"; 
const PELATIHAN_API_URL = "https://api.geomandirikreasi.pblweb0201.cloud/daftar-pelatihan";
const KONFIRMASI_API_URL = "https://api.geomandirikreasi.pblweb0201.cloud/api/data-pendaftar"; 
const UPLOAD_BASE_URL = "https://api.geomandirikreasi.pblweb0201.cloud/uploads/bukti/"; 

export default function DataPendaftar() {
  const [dataPendaftar, setDataPendaftar] = useState([]);
  const [dataPelatihan, setDataPelatihan] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [showKonfirmasiModal, setShowKonfirmasiModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [fileType, setFileType] = useState(""); 
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null); 
  const [formData, setFormData] = useState({
    institusi: "",
    alamat: "",
    telepon: "",
    fax: "",
    email: "",
    namaPeserta: "",
    telPeserta: "",
    emailPeserta: "",
    id_pelatihan: "",
  });
  const navigate = useNavigate();

  const fetchDataPendaftar = async () => {
    try {
      const response = await axios.get(API_URL);
      setDataPendaftar(response.data);
    } catch (error) {
      console.error("Gagal mengambil data pendaftar:", error);
    }
  };

  const fetchDataPelatihan = async () => {
    try {
      const response = await axios.get(PELATIHAN_API_URL);
      const data = response.data.map(p => ({ 
        id: p.id_pelatihan, 
        nama: p.nama_pelatihan 
      })); 
      
      setDataPelatihan(data);

      if (data.length > 0) {
        setFormData((prev) => ({
          ...prev,
          id_pelatihan: data[0].id.toString(), 
        }));
      }
    } catch (error) {
      console.error("Gagal mengambil data pelatihan:", error);
    }
  };

  useEffect(() => {
    fetchDataPendaftar();
    fetchDataPelatihan(); 
  }, []);

const handleAdd = async (e) => {
  e.preventDefault();
  e.stopPropagation(); // 🔹 cegah event double

  if (!formData.id_pelatihan) {
        alert("Pilih Pelatihan terlebih dahulu!");
        return;
    }


  try {
      const dataToSend = { ...formData, id_pelatihan: parseInt(formData.id_pelatihan) };
      await axios.post(API_URL, dataToSend);
      fetchDataPendaftar();
      setFormData({
        institusi: "", alamat: "", telepon: "", fax: "", email: "",
        namaPeserta: "", telPeserta: "", emailPeserta: "",
        id_pelatihan: dataPelatihan.length > 0 ? dataPelatihan[0].id.toString() : "",
      });

      alert("Data berhasil ditambahkan!");

      const modalCloseButton = document.querySelector('#tambahModal .btn-close');
      if (modalCloseButton) {
          modalCloseButton.click(); 
      }
      
    } catch (error) {
      console.error("Gagal menambahkan data:", error.response ? error.response.data : error);
      alert("Gagal menambahkan data! Cek konsol untuk detail error.");
    }
};

const handleKonfirmasi = (id) => {
    setCurrentId(id);
    setShowKonfirmasiModal(true);
  };

  const handleViewDetail = (item) => {
    setSelectedDetail(item);
    setShowDetailModal(true);
  };

  const handleViewBukti = (fileName) => {
    const url = `${UPLOAD_BASE_URL}${fileName}`;
    setFileUrl(url);
    const type = fileName.toLowerCase().endsWith(".pdf") ? "pdf" : "image";
    setFileType(type);
    setShowViewModal(true);
  };

  const submitKonfirmasi = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Pilih file bukti dulu!");
      return;
    }

    const form = new FormData();
    form.append("buktiDaftarUlang", selectedFile); 
    form.append("id_data_pendaftar", currentId); 

    try {
      await axios.post(`${KONFIRMASI_API_URL}/data-peserta/konfirmasi`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Konfirmasi berhasil!");
      setShowKonfirmasiModal(false);
      setSelectedFile(null);
      fetchDataPendaftar(); 
    } catch (err) {
      console.error(err);
      alert("Gagal konfirmasi!");
    }
  };

  const handleUpdate = (id) => {
    navigate(`/admin/data-pendaftar-edit/${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Apakah yakin akan menghapus data ini?");
    if (!confirmDelete) return;

    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        fetchDataPendaftar();
        alert("Data Berhasil dihapus");
      })
      .catch((error) => console.error(error));
  };

  const filteredData = dataPendaftar.filter((item) =>
    item.institusi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.namaPeserta.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.nama_pelatihan && item.nama_pelatihan.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Data Pendaftar Peserta Pelatihan</h3>

      <button
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#tambahModal"
      >
        + Tambah Data
      </button>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cari berdasarkan Institusi, Nama Peserta, atau Pelatihan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="container mt-4">
        <div className="table-responsive">
          <table
            className="table table-bordered text-center align-middle"
          >
            <thead className="table-success">
              <tr>
                <th>No</th>
                <th style={{ whiteSpace: "nowrap" }}>Institusi</th>
                <th style={{ whiteSpace: "nowrap" }}>Nama Peserta</th>
                <th style={{ whiteSpace: "nowrap" }}>Pelatihan</th>
                <th>Status</th>
                <th>Detail Konfirmasi</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item, i) => ( 
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{item.institusi}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{item.namaPeserta}</td>
                  <td style={{ whiteSpace: "nowrap" }}>{item.pelatihanRef?.nama_pelatihan || "N/A"}</td> 
                  
                  <td>
                    <span
                      className={`badge bg-${
                        item.status === "TERKONFIRMASI" ? "success" : "warning"
                      }`}
                    >
                      {item.status.replace("_", " ")}
                    </span>
                  </td>

                  <td style={{ whiteSpace: "nowrap" }}>
                    <button
                        className="btn btn-secondary btn-sm me-2"
                        onClick={() => handleViewDetail(item)}
                    >
                        Detail
                    </button>

                    {item.status !== "TERKONFIRMASI" && (
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleKonfirmasi(item.id)}
                      >
                        Konfirmasi
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleUpdate(item.id)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr><td colSpan="6" className="text-center">Tidak ada data pendaftar yang ditemukan.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- MODAL TAMBAH DATA --- */}
      <div className="modal fade" id="tambahModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Tambah Data Pendaftar</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAdd}>
                <h5>Data Institusi</h5>
                {["institusi", "alamat", "telepon", "fax", "email"].map((field) => (
                  <div className="mb-3" key={field}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      required
                    />
                  </div>
                ))}
                <h5>Data Peserta</h5>
                {["namaPeserta", "telPeserta", "emailPeserta"].map((field) => (
                  <div className="mb-3" key={field}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      required
                    />
                  </div>
                ))}

                <div className="mb-3">
                  <select
                    className="form-select"
                    value={formData.id_pelatihan}
                    onChange={(e) => setFormData({ ...formData, id_pelatihan: e.target.value })}
                    required
                  >
                    <option value="">-- Pilih Pelatihan --</option>
                    {dataPelatihan.map((pelatihan) => (
                      <option key={pelatihan.id} value={pelatihan.id}>
                        {pelatihan.nama}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-end">
                  <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">
                    Batal
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL DETAIL --- */}
      {showDetailModal && selectedDetail && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.4)" }}
          tabIndex="-1"
          onClick={() => setShowDetailModal(false)}
        >
          <div className="modal-dialog modal-lg" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detail Pendaftar: {selectedDetail.namaPeserta}</h5>
                <button className="btn-close" onClick={() => setShowDetailModal(false)}></button>
              </div>
              <div className="modal-body">
                
                <h6 className="fw-bold text-primary mb-2">Informasi Umum</h6>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Pelatihan:</strong>
                        <span>{selectedDetail.pelatihanRef?.nama_pelatihan || "N/A"}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <strong>Status:</strong>
                        <span className={`badge bg-${selectedDetail.status === "TERKONFIRMASI" ? "success" : "warning"}`}>
                           {selectedDetail.status.replace("_", " ")}
                        </span>
                    </li>
                </ul>

                <h6 className="fw-bold text-primary mb-2">Data Institusi</h6>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item"><strong>Institusi:</strong> {selectedDetail.institusi}</li>
                    <li className="list-group-item"><strong>Alamat:</strong> {selectedDetail.alamat}</li>
                    <li className="list-group-item"><strong>Telepon:</strong> {selectedDetail.telepon}</li>
                    <li className="list-group-item"><strong>Fax:</strong> {selectedDetail.fax}</li>
                    <li className="list-group-item"><strong>Email:</strong> {selectedDetail.email}</li>
                </ul>

                <h6 className="fw-bold text-primary mb-2">Data Peserta</h6>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item"><strong>Nama Peserta:</strong> {selectedDetail.namaPeserta}</li>
                    <li className="list-group-item"><strong>Telepon Peserta:</strong> {selectedDetail.telPeserta}</li>
                    <li className="list-group-item"><strong>Email Peserta:</strong> {selectedDetail.emailPeserta}</li>
                </ul>

                <h6 className="fw-bold text-primary mb-2">Bukti Pembayaran</h6>
                <div className="p-3 border rounded">
                    {selectedDetail.buktiBayar ? (
                        <button
                            className="btn btn-info btn-sm"
                            onClick={() => handleViewBukti(selectedDetail.buktiBayar)}
                        >
                            Lihat Bukti ({selectedDetail.buktiBayar.split('.').pop().toUpperCase()})
                        </button>
                    ) : (
                        <span className="text-muted">Bukti pembayaran belum diunggah.</span>
                    )}
                </div>

              </div>
              <div className="modal-footer">
                <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowDetailModal(false)}
                >
                    Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* --- MODAL KONFIRMASI --- */}
      {showKonfirmasiModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.4)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Unggah Bukti Pembayaran</h5>
                <button className="btn-close" onClick={() => setShowKonfirmasiModal(false)}></button>
              </div>

              <div className="modal-body">
                <form onSubmit={submitKonfirmasi}>
                  <div className="mb-3">
                    <label className="form-label">Bukti (Foto / PDF)</label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*,application/pdf"
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                      required
                    />
                  </div>

                  <div className="text-end">
                    <button type="submit" className="btn btn-success">
                      Upload & Konfirmasi
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      )}
      
      {/* --- MODAL LIHAT BUKTI --- */}
      {showViewModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.4)" }}
          tabIndex="-1"
          onClick={() => setShowViewModal(false)} 
        >
          <div className="modal-dialog modal-lg" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Lihat Bukti Pembayaran</h5>
                <button className="btn-close" onClick={() => setShowViewModal(false)}></button>
              </div>
              <div className="modal-body text-center">
                {fileType === 'pdf' ? (
                  <iframe 
                    src={fileUrl} 
                    style={{ width: '100%', height: '500px', border: 'none' }} 
                    title="Bukti Pembayaran PDF"
                  >
                    PDF tidak dapat ditampilkan. <a href={fileUrl} target="_blank" rel="noopener noreferrer">Unduh PDF</a>
                  </iframe>
                ) : (
                  <img 
                    src={fileUrl} 
                    className="img-fluid" 
                    alt="Bukti Pembayaran" 
                    style={{ maxHeight: '70vh' }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  
}