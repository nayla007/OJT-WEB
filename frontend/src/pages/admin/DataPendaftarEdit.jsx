import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function DataPendaftarEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [institusi, setInstitusi] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telepon, setTelepon] = useState("");
  const [fax, setFax] = useState("");
  const [email, setEmail] = useState("");
  const [namaPeserta, setNamaPeserta] = useState("");
  const [telPeserta, setTelPeserta] = useState("");
  const [emailPeserta, setEmailPeserta] = useState("");
  const [pelatihan, setPelatihan] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchDataById();
  }, []);

  const fetchDataById = () => {
    axios
      .get(`http://localhost:5000/api/pendaftar/data-pendaftar/${id}`)
      .then((response) => {
        const data = response.data;
        setInstitusi(data.institusi);
        setAlamat(data.alamat);
        setTelepon(data.telepon);
        setFax(data.fax);
        setEmail(data.email);
        setNamaPeserta(data.namaPeserta);
        setTelPeserta(data.telPeserta);
        setEmailPeserta(data.emailPeserta);
        setPelatihan(data.pelatihan);
      })
      .catch((error) => {
        console.error("Gagal memuat data:", error);
        alert("Terjadi kesalahan saat mengambil data pendaftar!");
      });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/pendaftar/data-pendaftar/${id}`, {
        institusi,
        alamat,
        telepon,
        fax,
        email,
        namaPeserta,
        telPeserta,
        emailPeserta,
        pelatihan,
      })
      .then((response) => {
        setSuccessMessage("✅ Data berhasil diperbarui!");
        setTimeout(() => {
          navigate("/admin/data-pendaftar");
}, 3000); // biar muncul 3 detik
      })
      .catch((error) => {
        console.error("Gagal memperbarui data:", error);
        alert("Terjadi kesalahan saat memperbarui data!");
      });
  };

  return (
    <section className="bg-light py-5 mt-3">
  <div className="container">
    <h3 className="text-center mb-4">Edit Data Pendaftar</h3>

    {successMessage && (
    <div className="alert alert-success text-center" role="alert">
      {successMessage} ✅
    </div>
  )}

    <form onSubmit={handleUpdate}>
      {/* Bagian Institusi */}
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
            type="email"
            className="form-control"
            id="email"
            placeholder="email@contoh.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      {/* Bagian Data Peserta */}
      <h3 className="text-center mt-4">Data Peserta</h3>

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
            type="email"
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
            <option value="Internal Auditor SMK3">Internal Auditor SMK3</option>
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
            <option value="Operator Penggerak Mula Jenis Genset">Operator Penggerak Mula Jenis Genset</option>
            <option value="Petugas P3K Ditempat Kerja">Petugas P3K Ditempat Kerja</option>
            <option value="Teknisi K3 Listrik">Teknisi K3 Listrik</option>
            <option value="TKBT Tingkat II">TKBT Tingkat II</option>
            <option value="Supervisi K3 Perancah">Supervisi K3 Perancah</option>
            <option value="Teknisi K3 Deteksi Gas">Teknisi K3 Deteksi Gas</option>
            <option value="Teknisi K3 PAA">Teknisi K3 PAA</option>
            <option value="Teknisi K3 Perancah">Teknisi K3 Perancah</option>
            <option value="Teknisi K3 PTP">Teknisi K3 PTP</option>
            <option value="Teknisi K3 Tangki Timbun dan Bejana Tekan">Teknisi K3 Tangki Timbun dan Bejana Tekan</option>
            <option value="TKBT Level 2">TKBT Level 2</option>
            <option value="TKBT Tingkat 1 dan 2">TKBT Tingkat 1 dan 2</option>
          </select>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-warning" type="submit">
          Perbarui Data
        </button>
      </div>
    </form>
  </div>
</section>
  );
}
