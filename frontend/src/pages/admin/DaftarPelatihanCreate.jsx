import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DaftarPelatihanCreate() {
  const navigate = useNavigate();
  const [kategori, setKategori] = useState([]);
  const [id_kategori, setIdKategori] = useState("");
  const [nama_pelatihan, setNamaPelatihan] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [persyaratan, setPersyaratan] = useState("");
  const [materiPembelajaran, setMateriPembelajaran] = useState("");
  const [instruktur, setInstruktur] = useState("");
  const [sertifikasi, setSertifikasi] = useState("");
  const [metodePembelajaran, setMetodePembelajaran] = useState("");
  const [biaya, setBiaya] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [contact, setContact] = useState("");

  // FILE UPLOAD
  const [fileMateri, setFileMateri] = useState(null);

  // 👉 FETCH KATEGORI
  useEffect(() => {
    const fetchKategori = async () => {
      try {
        const response = await axios.get("http://localhost:5000/kategori-pelatihan");
        setKategori(response.data);
      } catch (error) {
        console.error("Gagal mengambil data kategori:", error);
      }
    };

    fetchKategori();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("id_kategori", id_kategori);
    formData.append("nama_pelatihan", nama_pelatihan);
    formData.append("tujuan", tujuan);
    formData.append("persyaratan", persyaratan);
    formData.append("materi_pembelajaran", materiPembelajaran);
    formData.append("instruktur", instruktur);
    formData.append("sertifikasi", sertifikasi);
    formData.append("metode_pembelajaran", metodePembelajaran);
    formData.append("biaya", biaya);
    formData.append("fasilitas", fasilitas);
    formData.append("contact", contact);

      // FILE
      if (fileMateri) {
        formData.append("file", fileMateri);
      }

      const response = await axios.post(
        "http://localhost:5000/daftar-pelatihan",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response server:", response.data);

      alert("✅ Data berhasil disimpan!");
      navigate("/admin/daftar-pelatihan");

    } catch (error) {
      console.error("Gagal menyimpan data:", error.response || error);
      alert("❌ Gagal menyimpan data! Lihat console.");
    }
  };

  return (
    <section className="bg-light py-5 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h3 className="text-center mb-4">Tambah Daftar Pelatihan</h3>

          {/* Pilih Kategori */}
        <div className="mb-3 row">
  <label className="col-sm-2 col-form-label">Kategori</label>
  <div className="col-sm-10">
    <select
      className="form-control"
      value={id_kategori}
      onChange={(e) => setIdKategori(e.target.value)}
    >
      <option value="">-- Pilih Kategori --</option>
      {kategori.map((k) => (
        <option key={k.id_kategori} value={k.id_kategori}>
          {k.nama_kategori}
        </option>
      ))}
    </select>
  </div>
</div>

          <div className="mb-3 row">
            <label htmlFor="nama_pelatihan" className="col-sm-2 col-form-label">
              Nama Pelatihan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Nama Pelatihan"
                className="form-control"
                id="nama_pelatihan"
                value={nama_pelatihan}
                onChange={(e) => setNamaPelatihan(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="tujuan" className="col-sm-2 col-form-label">
              Tujuan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Tujuan"
                className="form-control"
                id="tujuan"
                value={tujuan}
                onChange={(e) => setTujuan(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="persyaratan" className="col-sm-2 col-form-label">
              Persyaratan
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Persyaratan"
                className="form-control"
                id="persyaratan"
                value={persyaratan}
                onChange={(e) => setPersyaratan(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label
              htmlFor="materi_pembelajaran"
              className="col-sm-2 col-form-label"
            >
              Materi Pembelajaran
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Materi Pembelajaran"
                className="form-control"
                id="materi_pembelajaran"
                value={materiPembelajaran}
                onChange={(e) => setMateriPembelajaran(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="instruktur" className="col-sm-2 col-form-label">
              Instruktur
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Instruktur"
                className="form-control"
                id="instruktur"
                value={instruktur}
                onChange={(e) => setInstruktur(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="sertifikasi" className="col-sm-2 col-form-label">
              Sertifikasi
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Sertifikasi"
                className="form-control"
                id="sertifikasi"
                value={sertifikasi}
                onChange={(e) => setSertifikasi(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label
              htmlFor="metode_pembelajaran"
              className="col-sm-2 col-form-label"
            >
              Metode Pembelajaran
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Metode Pembelajaran"
                className="form-control"
                id="metode_pembelajaran"
                value={metodePembelajaran}
                onChange={(e) => setMetodePembelajaran(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="biaya" className="col-sm-2 col-form-label">
              Biaya
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Biaya"
                className="form-control"
                id="biaya"
                value={biaya}
                onChange={(e) => setBiaya(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="fasilitas" className="col-sm-2 col-form-label">
              Fasilitas
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Fasilitas"
                className="form-control"
                id="fasilitas"
                value={fasilitas}
                onChange={(e) => setFasilitas(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="contact" className="col-sm-2 col-form-label">
              Contact
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                placeholder="Contact"
                className="form-control"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
  <label className="col-sm-2 col-form-label">Upload File</label>
  <div className="col-sm-10">
    <input
      type="file"
      className="form-control"
      onChange={(e) => setFileMateri(e.target.files[0])}
      accept=".pdf,.doc,.docx,.jpg,.png"
    />
  </div>
</div>

          <div className="text-end">
            <button className="btn btn-primary" type="submit">
              Simpan Kategori Pelatihan
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
