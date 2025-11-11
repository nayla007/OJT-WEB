import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function PelatihanK3() {
  const [selected, setSelected] = useState("Ahli K3");

  const dataPelatihan = {
    "Ahli K3": [
      {
        title: "Ahli K3 Kimia",
        desc: "Pelatihan untuk menjadi Ahli K3 di bidang industri kimia, memahami bahaya bahan kimia dan prosedur keselamatan kerja.",
        file: "silabus/Ahli K3 Kimia.pdf"
      },
      {
        title: "Ahli K3 Listrik",
        desc: "Pelatihan untuk mempersiapkan tenaga ahli dalam sistem keselamatan kerja kelistrikan industri.",
        file: "silabus/Ahli K3 Listrik Juni.pdf"
      },
      {
        title: "Ahli K3 Muda Lingkungan Kerja",
        desc: "Pelatihan ini menyiapkan personil K3 yang kompeten untuk mengendalikan faktor fisika, kimia, biologi, ergonomi, dan psikologi kerja, serta memastikan fasilitas kebersihan dan higiene di tempat kerja. Tersedia tiga level kompetensi: Ahli Muda, Madya, dan Utama.",
        file: "silabus/Ahli K3 Muda Lingkungan Kerja.pdf"
      },
      {
        title: "Ahli K3 Pesawat Angkat Dan Pesawat Angkut",
        desc: "Pelatihan untuk memahami penilaian kelayakan dan keselamatan Pesawat Angkat & Pesawat Angkut sesuai standar K3, bagi tenaga operator dan maintenance bersertifikasi.",
        file: "silabus/Ahli K3 PAA.pdf"
      },
      {
        title: "Ahli K3 Spesialis Kebakaran",
        desc: "Pelatihan ini mempersiapkan tenaga ahli untuk mencegah, mengurangi, dan memadamkan kebakaran di tempat kerja sesuai standar Menaker No. KEP.186/1999. Peserta wajib mengikuti Kelas D, C, dan B terlebih dahulu, dan setiap 1 ahli bertanggung jawab untuk 300 pekerja di lokasi dengan risiko kebakaran ringan hingga berat.",
        file: "silabus/Ahli K3 Pesawat Angkat dan Pesawat Angkut.pdf"
      },
      {
        title: "Ahli K3 Umum",
        desc: "Pelatihan ini menyiapkan Ahli K3 bersertifikasi sesuai UU No.1/1970 dan peraturan Menaker, untuk memastikan pelaksanaan K3 di perusahaan berjalan optimal serta mendukung produktivitas dan efisiensi kerja.",
        files: [
    { name: "Pelatihan Ahli K3 Umum", path: "silabus/Ahli K3 Umum.pdf" },
    { name: "Pelatihan Ahli K3 Umum(Agustus)", path: "silabus/Ahli K3 Umum Agustus 2022.pdf" },
    { name: "Pelatihan Ahli K3 Umum(Oktober)", path: "silabus/Ahli K3 Umum Oktober 2022.pdf" },
    { name: "Pelatihan Ahli K3 Umum(September)", path: "silabus/Ahli K3 Umum September 2022.pdf" }
  ]
      },
      {
        title: "Ahli Muda K3 Konstruksi",
        desc: "Industri konstruksi memiliki risiko kecelakaan kerja tertinggi dibanding industri lain, sehingga pelatihan ini menyiapkan calon Ahli Muda K3 untuk menanggulangi kecelakaan dan memastikan keselamatan di proyek konstruksi.",
        file: "silabus/Ahli Muda K3 Konstruksi.pdf"
      }
    ],
    "Teknisi K3": [
      {
        title: "Teknisi K3 Listrik",
        desc: "Pelatihan teknisi yang fokus pada pengoperasian, instalasi, dan inspeksi sistem kelistrikan secara aman."
      },
      {
        title: "Teknisi K3 Deteksi Gas",
        desc: "Mempelajari penggunaan alat deteksi gas dan manajemen risiko gas berbahaya di lingkungan kerja."
      },
      {
        title: "Teknisi K3 PAA",
        desc: "Pelatihan terkait Pesawat Angkat dan Angkut (PAA) untuk menjamin keselamatan operasional alat berat."
      },
      {
        title: "Teknisi K3 Perancah",
        desc: "Pelatihan keselamatan kerja untuk pekerjaan di ketinggian menggunakan perancah (scaffolding)."
      },
      {
        title: "Teknisi K3 Tangki Timbun dan Bejana Tekan",
        desc: "Pelatihan pemeriksaan dan keselamatan tangki timbun serta bejana tekan bertekanan tinggi."
      }
    ],
    "Operator K3": [
      {
        title: "Operator Penggerak Mula Jenis Genset",
        desc: "Pelatihan untuk operator genset mencakup pengoperasian, perawatan, dan keselamatan penggunaan genset industri."
      }
    ],
    "Petugas K3": [
      {
        title: "Petugas P3K di Tempat Kerja",
        desc: "Membekali peserta dengan pengetahuan dan keterampilan untuk memberikan pertolongan pertama di tempat kerja."
      },
      {
        title: "Supervisi K3 Perancah",
        desc: "Mempersiapkan tenaga pengawas dalam pekerjaan perancah agar sesuai dengan standar keselamatan."
      }
    ],
    "Teknisi PTP / TKBT": [
      {
        title: "Teknisi K3 PTP (Pesawat Tenaga dan Produksi)",
        desc: "Pelatihan teknisi alat produksi seperti boiler, kompresor, dan sistem tenaga industri."
      },
      {
        title: "TKBT Tingkat II (Tenaga Kerja Bangunan Tinggi)",
        desc: "Pelatihan untuk pekerja di bangunan tinggi agar dapat bekerja secara aman di ketinggian."
      },
      {
        title: "TKBT Level 2",
        desc: "Level lanjutan untuk tenaga kerja bangunan tinggi dengan materi keselamatan lanjutan."
      }
    ]
  };

  return (
    <div className="container py-5" data-aos="fade-up">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-dark">Daftar Pelatihan K3</h2>
        <p className="text-muted">
          Pilih kategori pelatihan di bawah untuk melihat daftar program dan penjelasannya
        </p>
        
      </div>

      <div className="row justify-content-center">
        {/* Kartu utama */}
        <div className="col-lg-10">
          <div className="card shadow border-0 rounded-3 overflow-hidden">
            <div className="row g-0">
              {/* Kiri - List Group */}
              <div className="col-md-4 bg-light border-end">
                <div className="p-4">
                  <h5 className="fw-bold text-success mb-3">Kategori Pelatihan</h5>
                  <div className="list-group">
                    {Object.keys(dataPelatihan).map((kategori) => (
                      <button
                        key={kategori}
                        className={`list-group-item list-group-item-action mb-2 ${
                          selected === kategori ? "active" : ""
                        }`}
                        onClick={() => setSelected(kategori)}
                      >
                        {kategori}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kanan - Accordion */}
              <div className="col-md-8">
                <div className="p-4">
                  <h5 className="fw-bold mb-3 text-success">{selected}</h5>
                  <div className="accordion" id="accordionPelatihan">
                    {dataPelatihan[selected].map((item, index) => (
                      <div className="accordion-item mb-2" key={index}>
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button ${
                              index !== 0 ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                          >
                            {item.title}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className={`accordion-collapse collapse ${
                            index === 0 ? "show" : ""
                          }`}
                          data-bs-parent="#accordionPelatihan"
                        >
                          <div className="accordion-body">
                              <p className="mb-0">{item.desc}</p>
                              {item.files ? (
                                <div className="text-start mt-3">
                                  <p className="fw-bold mb-2">Download File:</p>
                                    {item.files.map((file, idx) => (
                                      <div key={idx}>
                                        <a className="download-jadwal mb-1" href={file.path} download>
                                          📄 {file.name}
                                        </a>
                                      </div>
                                    ))}
                                </div>
                              ) : item.file ? (
                                  <div className="text-start mt-3">
                                    <a className="download-jadwal" href={item.file} download>
                                      📄 Download File Pelatihan
                                    </a>
                                  </div>
                              ) : null}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}