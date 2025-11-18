import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_KATEGORI = "https://api.geomandirikreasi.pblweb0201.cloud/kategori-pelatihan";

export default function DaftarPelatihan() {
  // const [kategori, setKategori] = useState([]);
  // const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const [kategori, setKategori] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    try {
      const kat = await axios.get("https://api.geomandirikreasi.pblweb0201.cloud/kategori-pelatihan");
      const pel = await axios.get("https://api.geomandirikreasi.pblweb0201.cloud/daftar-pelatihan");

      const gabung = kat.data.map((k) => ({
        ...k,
        daftar_pelatihan: pel.data.filter(
          (p) => p.id_kategori === k.id_kategori
        ),
      }));

      setKategori(gabung);
    } catch (err) {
      console.error("Gagal memuat data:", err);
    }
  };

  // Load pertama kali
  useEffect(() => {
    fetchData();
  }, []);

  // ===============================
  // DELETE PELATIHAN
  // ===============================
  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin hapus pelatihan ini?")) return;

    try {
      await axios.delete(`https://api.geomandirikreasi.pblweb0201.cloud/daftar-pelatihan/${id}`);
      alert("Data berhasil dihapus!");

      fetchData(); // <-- REFRESH DATA
    } catch (err) {
      console.error("Gagal menghapus:", err);
      alert("Gagal menghapus data. Cek backend.");
    }
  };
  
  return (
    <div className="container py-3">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-dark">Daftar Pelatihan K3</h2>
        <p className="text-muted">
          Pilih kategori pelatihan di bawah untuk melihat daftar program dan
          penjelasannya
        </p>
      </div>

      

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card shadow border-0 rounded-3 overflow-hidden">
            {/* === CARD HEADER === */}
  <div className="card-header d-flex justify-content-between align-items-center bg-white">
    <h5 className="fw-bold text-success mb-0">Daftar Pelatihan</h5>

    <button
      className="btn btn-primary"
      type="button"
      onClick={() => navigate("/admin/daftar-pelatihan-create")}
    >
      Tambah Data Baru
    </button>
  </div>
            <div className="row g-0">
              {/* SIDEBAR */}
              <div className="col-md-4 bg-light border-end">
                <div className="p-4">
                  <h5 className="fw-bold text-success mb-3">
                    Kategori Pelatihan
                  </h5>
                  {/* Kategori */}
      <div className="list-group mb-4">
        {kategori.map((k) => (
          <button
            key={k.id_kategori}
            className={`list-group-item list-group-item-action ${
              selected === k.id_kategori ? "active" : ""
            }`}
            onClick={() => setSelected(k.id_kategori)}
          >
            {k.nama_kategori}
          </button>
        ))}
      </div>
                </div>
              </div>

              {/* ISI KONTEN */}
              <div className="col-md-8 p-4">
                {!selected ? (
                  <p className="text-muted">
                    Silakan pilih kategori pelatihan di sebelah kiri.
                  </p>
                ) : (
                  <>
                    <h5 className="fw-bold text-success mb-3">
                      {
                        kategori.find((k) => k.id_kategori === selected)
                          ?.nama_kategori
                      }
                    </h5>

                    <div className="accordion" id="accordionPelatihan">
                      {kategori
                        .find((k) => k.id_kategori === selected)
                        ?.daftar_pelatihan?.map((pel, i) => (
                          <div
                            className="accordion-item mb-2"
                            key={pel.id_pelatihan}
                          >
                            <h2 className="accordion-header">
                              <button
                                className={`accordion-button ${
                                  i !== 0 ? "collapsed" : ""
                                }`}
                                data-bs-toggle="collapse"
                                data-bs-target={`#col${i}`}
                              >
                                {pel.nama_pelatihan}
                              </button>
                            </h2>

                            <div
                              id={`col${i}`}
                              className={`accordion-collapse collapse ${
                                i === 0 ? "show" : ""
                              }`}
                              data-bs-parent="#accordionPelatihan"
                            >
                              <div
                                className="accordion-body"
                                key={pel.id_pelatihan}
                              >
                                <h6>Tujuan</h6>
                                <p>{pel.tujuan}</p>

                                <h6>Persyaratan</h6>
                                <p>{pel.persyaratan}</p>

                                <h6>Materi Pembelajaran</h6>
                                <p>{pel.materi_pembelajaran}</p>

                                <h6>Instruktur</h6>
                                <p>{pel.instruktur}</p>

                                <h6>Sertifikasi</h6>
                                <p>{pel.sertifikasi}</p>

                                <h6>Metode Pembelajaran</h6>
                                <p>{pel.metode_pembelajaran}</p>

                                <h6>Biaya</h6>
                                <p>RP {new Intl.NumberFormat('id-ID').format(pel.biaya)}</p>

                                <h6>Fasilitas</h6>
                                <p>{pel.fasilitas}</p>

                                <h6>Contact</h6>
                                <p>{pel.contact}</p>


                                <h6>Materi</h6>
                                <p>{pel.materi_pembelajaran}</p>

                                {/* 🔥 TAMBAH BAGIAN FILE DI SINI */}
    {pel.file_url && (
      <>
        <h6>File Materi</h6>
        <a
          href={`https://api.geomandirikreasi.pblweb0201.cloud/uploads/pelatihan/${pel.file_url}`}
          target="_blank"
          className="btn btn-info btn-sm mb-3"
        >
          Lihat / Download File
        </a>
      </>
    )}

                                <div className="d-flex justify-content-end gap-2">
                                  <button
                                    className="btn btn-warning btn-sm"
                                    onClick={() =>
                                      navigate(
                                        `/admin/daftar-pelatihan-edit/${pel.id_pelatihan}`
                                      )
                                    }
                                  >
                                    Edit
                                  </button>

                                  <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(pel.id_pelatihan)}
                    >
                      Hapus
                    </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
