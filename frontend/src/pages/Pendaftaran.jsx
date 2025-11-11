import { useState, useEffect } from "react";
import axios from "axios";

export default function Pendaftaran() {
  const [dataPendaftar, setDataPendaftar] = useState([]);
  const [institusi, setInstitusi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [fax, setFax] = useState("");
  const [email, setEmail] = useState("");

  const [namaPeserta, setNamaPeserta] = useState("");
  const [telPeserta, setTelPeserta] = useState("");
  const [emailPeserta, setEmailPeserta] = useState("");
  const [pelatihan, setPelatihan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const API_URL = "http://localhost:5000/api/pendaftar/data-pendaftar"

    axios
      .post(API_URL, {
        institusi: institusi,
        alamat: alamat,
        telepon: telepon,
        fax: fax,
        email: email,
        namaPeserta: namaPeserta,
        telPeserta: telPeserta,
        emailPeserta: emailPeserta,
        pelatihan: pelatihan,
      })
      .then((response) => {
        setInstitusi("");
        setAlamat("");
        setTelepon("");
        setFax("");
        setEmail("");
        setNamaPeserta("");
        setTelPeserta("");
        setEmailPeserta("");
        setPelatihan("");
        alert("✅ Pendaftaran berhasil dikirim!");
  console.log("Berhasil:", response);
      })
      .catch((error) => {
        console.error("Gagal Menyimpan Data:", error);
      })
      .finally(() => {});
  };

  return (
    <section className="bg-light py-5 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h3 className="text-center">Data Institusi / Lembaga </h3>

          <div className="mb-3 row">
            <label htmlFor="institusi" className="col-sm-2 col-form-label">
              Nama Institusi / Lembaga
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Nama Institusi / Lembaga"
                className="form-control"
                id="institusi"
                value={institusi}
                onChange={(e) => setInstitusi(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="alamat" className="col-sm-2 col-form-label">
              Alamat
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                placeholder="Alamat Institusi"
                id="alamat"
                style={{ height: "100px" }}
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="telepon" className="col-sm-2 col-form-label">
              No Telepon
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                placeholder="No. Telepon Institusi"
                className="form-control"
                id="telepon"
                value={telepon}
                onChange={(e) => setTelepon(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="fax" className="col-sm-2 col-form-label">
              No. Fax
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fax"
                placeholder="No. Fax"
                value={fax}
                onChange={(e) => setFax(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="email@contoh.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <h3 className="text-center">Data Peserta </h3>

          <div className="mb-3 row">
            <label htmlFor="namaPeserta" className="col-sm-2 col-form-label">
              Nama Lengkap
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="namaPeserta"
                placeholder="Nama Peserta"
                value={namaPeserta}
                onChange={(e) => setNamaPeserta(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="telPeserta" className="col-sm-2 col-form-label">
              No Telepon Peserta
            </label>
            <div className="col-sm-3">
              <input
                type="text"
                className="form-control"
                placeholder="No. Telepon Peserta"
                id="telPeserta"
                value={telPeserta}
                onChange={(e) => setTelPeserta(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="emailPeserta" className="col-sm-2 col-form-label">
              Email Peserta
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="emailPeserta"
                placeholder="email@contoh.com"
                value={emailPeserta}
                onChange={(e) => setEmailPeserta(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="pelatihan" className="col-sm-2 col-form-label">
              Pilih Pelatihan
            </label>
            <div className="col-sm-10">
              <select
                id="pelatihan"
                className="form-select"
                value={pelatihan}
                onChange={(e) => setPelatihan(e.target.value)}
              >
                <option value="">-- Pilih Sertifikasi --</option>
                <option value="Internal Auditor SMK3">
                  Internal Auditor SMK3
                </option>
                <option value="Ahli K3 Kimia">Ahli K3 Kimia</option>
                <option value="Ahli K3 Listrik">Ahli K3 Listrik</option>
                <option value="Ahli K3 Muda Lingkungan Kerja">Ahli K3 Muda Lingkungan Kerja</option>
                <option value="Ahli K3 PAA">Ahli K3 PAA</option>
                <option value="Ahli K3 Pesawat Angkat dan Pesawat Angkut">Ahli K3 Pesawat Angkat dan Pesawat Angkut</option>
                <option value="Ahli K3 Spesialis Kebakaran(Paket DCBA)">Ahli K3 Spesialis Kebakaran (Paket DCBA)</option>
                <option value="Ahli K3 Umum">Ahli K3 Umum</option>
                <option value="Ahli Muda K3 Konstruksi">Ahli Muda K3 Konstruksi</option>
                <option value="Juru Ikat">Juru Ikat</option>
                <option value="Juru Las (Welder)">Juru Las (Welder)</option>
                <option value="K3 Kebakaran Kelas DCBA">K3 Kebakaran Kelas DCBA</option>
                <option value="Operator Penggerak Mula Jenis Genset">
                  Operator Penggerak Mula Jenis Genset
                </option>
                <option value="Petugas P3K Ditempat Kerja">
                  Petugas P3K Ditempat Kerja
                </option>
                <option value="Teknisi K3 Listrik">Teknisi K3 Listrik</option>
                <option value="TKBT Tingkat II">TKBT Tingkat II</option>
                <option value="Supervisi K3 Perancah">
                  Supervisi K3 Perancah
                </option>
                <option value="Teknisi K3 Deteksi Gas">
                  Teknisi K3 Deteksi Gas
                </option>
                <option value="Teknisi K3 Listrik">Teknisi K3 Listrik</option>
                <option value="Teknisi K3 PAA">Teknisi K3 PAA</option>
                <option value="Teknisi K3 Perancah">Teknisi K3 Perancah</option>
                <option value="Teknisi K3 PTP">Teknisi K3 PTP</option>
                <option value="Teknisi K3 Tangki Timbun dan Bejana Tekan">
                  Teknisi K3 Tangki Timbun dan Bejana Tekan
                </option>
                <option value="Teknisi PTP.doc">Teknisi PTP.doc</option>
                <option value="TKBT Level 2">TKBT Level 2</option>
                <option value="TKBT Tingkat 1 dan 2">
                  TKBT Tingkat 1 dan 2
                </option>
                <option value=""></option>
              </select>
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Daftar Pelatihan
          </button>
        </div>
      </form>


      <div className="mb-3 text-center">
        <p>---atau---</p>
        <a
          href="/Formulir_Pendaftaran.doc"
          download
          target="_blank"
          className="btn btn-success"
        >
          Download Formulir (.doc)
        </a>
      </div>

    </section>
  );
}
