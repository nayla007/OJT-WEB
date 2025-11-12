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
        file: "silabus/Ahli K3 Umum.pdf" 
      },
      {
        title: "Ahli Muda K3 Konstruksi",
        desc: "Industri konstruksi memiliki risiko kecelakaan kerja tertinggi dibanding industri lain, sehingga pelatihan ini menyiapkan calon Ahli Muda K3 untuk menanggulangi kecelakaan dan memastikan keselamatan di proyek konstruksi.",
        file: "silabus/Ahli Muda K3 Konstruksi.pdf"
      },
      {
        title: "Internal Auditor SMK3",
        desc: "Pelatihan Internal Auditor SMK3 untuk memahami, merencanakan, dan melaksanakan audit internal Sistem Manajemen K3 sesuai PP No. 50 Tahun 2012, serta meningkatkan kompetensi dalam pengendalian risiko dan perbaikan berkelanjutan di perusahaan.",
        file: "silabus/Silabus Internal Auditor SMK3 Juni 2022.pdf"
      }
    ],
    "Teknisi K3": [
      {
        title: "Teknisi K3 Listrik",
        desc: "Pelatihan bagi teknisi listrik berpengalaman untuk memahami bahaya kelistrikan dan menerapkan prosedur keselamatan kerja sesuai standar K3 Listrik.",
        file: "silabus/Teknisi K3 Listrik.pdf"
      },
      {
        title: "Teknisi K3 Deteksi Gas",
        desc: "Pelatihan bagi teknisi yang bertugas mendeteksi gas berbahaya dan mudah terbakar. Peserta belajar teori pembakaran, prosedur pengujian gas, serta penggunaan alat deteksi gas portabel sesuai standar K3.",
        file: "silabus/Teknisi K3 Deteksi Gas.pdf"
      },
      {
        title: "Teknisi K3 PAA",
        desc: "Pelatihan bagi teknisi untuk memeriksa dan memelihara pesawat angkat serta angkut agar aman digunakan, sesuai standar K3 dan regulasi Permenaker No. 08 Tahun 2020.",
        file: "silabus/Teknisi K3 PAA.pdf"
      },
      {
        title: "Teknisi K3 Perancah",
        desc: "Pelatihan bagi teknisi perancah untuk menerapkan prosedur kerja aman saat pemasangan dan pembongkaran scaffolding sesuai standar K3.",
        file: "silabus/Teknisi K3 Perancah.pdf"
      },
      {
        title: "Teknisi K3 Tangki Timbun dan Bejana Tekan",
        desc: "Pelatihan bagi teknisi untuk memahami prosedur pemeriksaan, pengujian, dan pengoperasian bejana tekan serta tangki timbun secara aman sesuai standar K3.",
        file: "silabus/Teknisi K3 Tangki Timbun dan Bejana Tekan.pdf"
      },
      {
        title: "Teknisi K3 PTP",
        desc: "Pelatihan bagi teknisi untuk mengoperasikan dan memelihara pesawat tenaga dan produksi (PTP) secara aman sesuai standar K3 guna mencegah kecelakaan kerja.",
        file: "silabus/Teknisi K3 PTP.pdf"
      }
    ],
    "Operator K3": [
      {
        title: "Operator Penggerak Mula Jenis Genset",
        desc: "Pelatihan bagi operator mesin diesel (genset) untuk mengoperasikan dan merawat peralatan secara aman sesuai standar K3 dan peraturan yang berlaku.",
        file: "silabus/Operator Penggerak Mula (Genset).pdf"
      },
      {
        title: "Operator Boiler",
        desc: "Pelatihan bagi operator mesin boiler untuk mengoperasikan dan merawat peralatan secara aman sesuai standar K3.",
        file: "silabus/Operator Boiler Kelas 2.pdf"
      },
      {
        title: "Operator Conveyor",
        desc: "Pelatihan bagi operator conveyor untuk mengoperasikan dan merawat peralatan secara aman sesuai standar K3, guna mencegah kecelakaan kerja.",
        file: "silabus/Operator Conveyor.pdf"
      },
      {
        title: "Operator Forklift",
        desc: "Pelatihan bagi operator forklift untuk mengoperasikan alat angkut secara aman sesuai standar K3 dan regulasi yang berlaku.",
        file: "silabus/Operator Forklift Kelas 2.doc.pdf"
      },
      {
        title: "Operator Gondola",
        desc: "Pelatihan bagi operator gondola untuk mengoperasikan alat angkat secara aman sesuai standar K3 dan regulasi Kemnaker RI.",
        file: "silabus/Operator Gondola.pdf"
      },
      {
        title: "Operator K3 OHC",
        desc: "Pelatihan bagi teknisi pesawat angkat dan angkut untuk mengoperasikan dan merawat peralatan secara aman sesuai standar K3.",
        file: "silabus/Operator K3 OHC Kelas III.pdf"
      },
      {
        title: "Operator Mesin Perkakas dan Produksi",
        desc: "Pelatihan bagi K3 Operator Mesin Perkakas & Produksi (Mesin Pres, Cetak, CNC, dll) untuk mengoperasikan dan mengawasi mesin secara aman, meminimalkan risiko kecelakaan dan penyakit akibat kerja sesuai standar K3 dan regulasi pemerintah.",
        file: "silabus/Operator Mesin Perkakas dan Produksi.pdf"
      },
      {
        title: "Operator Mobile Crane",
        desc: "Pelatihan bagi teknisi pesawat angkat dan angkut untuk bekerja aman, meminimalkan risiko, dan memenuhi standar K3.",
        file: "silabus/Operator Mobile Crane Kelas 3.doc.pdf"
      },
      {
        title: "Operator Towing Car",
        desc: "Pelatihan bagi operator Towing Car untuk mengoperasikan alat angkut secara aman sesuai standar K3 dan regulasi Kemnaker RI.",
        file: "silabus/Operator Towing Car.doc.pdf"
      },
      {
        title: "Juru Las (Welder)",
        desc: "Merupakan pelatihan tenaga kerja terampil yang melakukan pengelasan sesuai bidang keahlian dan keterampilan teknisnya.",
        file: "Juru Las (Welder).doc.pdf"
      },
      {
        title: "Juru Ikat",
        desc: "Pelatihan Lifting & Rigging bagi Rigger (Juru Ikat) untuk memahami alat bantu angkat, teknik pengikatan, komunikasi dengan operator, dan pengendalian risiko sesuai standar K3 dan regulasi Kemnaker.",
        file: "silabus/Juru Ikat.doc.pdf"
      }
    ],
    "Petugas K3": [
      {
        title: "Petugas P3K",
        desc: "Pelatihan Petugas P3K untuk meningkatkan pengetahuan dan keterampilan pertolongan pertama serta penerapan K3 di tempat kerja.",
        file: "silabus/Petugas P3K.pdf"
      },
      {
        title: "Petugas K3 Kebakaran",
        desc: "Pelatihan Petugas K3 Kebakaran Kelas D untuk mengenali bahaya kebakaran, melakukan pemadaman dengan APAR, dan meningkatkan kewaspadaan di tempat kerja.",
        file: "silabus/Petugas (Peran) Penanggulangan Kebakaran Kelas D.doc (3).pdf"
      },
      {
        title: "Petugas K3 Kimia",
        desc: "Pelatihan Petugas K3 Kimia untuk memahami bahaya bahan kimia, menerapkan prosedur kerja aman, mengendalikan risiko, dan menanggulangi keadaan darurat sesuai standar K3 dan peraturan Kemnaker RI.",
        file: "silabus/Petugas K3 Kimia Agustus.pdf"
      },
      {
        title: "Petugas Utama Ruang Terbatas",
        desc: "Pelatihan Petugas K3 Utama Ruang Terbatas (Confined Space) untuk bekerja aman di ruang tertutup, mengidentifikasi risiko, menggunakan APD, mengendalikan bahaya, dan menanggulangi keadaan darurat sesuai standar K3 dan regulasi Kemnaker RI.",
        file: "silabus/Petugas Utama Ruang Terbatas.pdf"
      },
      {
        title: "Supervisi K3 Perancah",
        desc: "Pembinaan & Pelatihan Scaffolder untuk meningkatkan pengetahuan, keterampilan, dan disiplin dalam pemasangan, perawatan, pemeliharaan, dan pembongkaran perancah secara aman sesuai standar K3 dan peraturan pemerintah.",
        file: "silabus/Nisa_Supervisi K3 Perancah.pdf"
      },
    ],
    "Teknisi PTP / TKBT": [
      {
        title: "Teknisi K3 PTP (Pesawat Tenaga dan Produksi)",
        desc: "Pelatihan bagi teknisi untuk mengoperasikan dan memelihara pesawat tenaga dan produksi (PTP) secara aman sesuai standar K3 guna mencegah kecelakaan kerja.",
        file: "silabus/Teknisi K3 PTP.pdf"
      },
      {
        title: "TKBT Tingkat I dan II (Tenaga Kerja Bangunan Tinggi)",
        desc: "Pelatihan Kesadaran Bekerja di Ketinggian untuk mengenali risiko, menerapkan metode aman, dan meminimalkan kecelakaan kerja saat bekerja di ketinggian.",
        file: "silabus/TKBT Tingkat 1 dan 2.pdf"
      },
      {
        title: "TKBT Level 2",
        desc: "Level lanjutan untuk tenaga kerja bangunan tinggi dengan materi keselamatan lanjutan.",
        file: "silabus/TKBT Level 2 Maret.pdf"
      },
      {
        title: "TKPK Level 1",
        desc: "Pelatihan TKPK Level 1 (Akses Tali) bagi pekerja dan pengawas untuk bekerja aman di ketinggian menggunakan akses tali sesuai standar K3 Kemnaker.",
        file: "silabus/TKPK Level 1.pdf"
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