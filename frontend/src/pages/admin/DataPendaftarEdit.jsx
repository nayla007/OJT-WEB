import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://api.geomandirikreasi.pblweb0201.cloud/api/data-pendaftar";
const PELATIHAN_API_URL = "https://api.geomandirikreasi.pblweb0201.cloud/daftar-pelatihan";

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
  const [idPelatihanTerpilih, setIdPelatihanTerpilih] = useState("");
  const [dataPelatihan, setDataPelatihan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDataById = async () => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      const DataBaru = response.data;
      
      setInstitusi(DataBaru["institusi"] || "");
      setAlamat(DataBaru["alamat"] || "");
      setTelepon(DataBaru["telepon"] || "");
      setFax(DataBaru["fax"] || "");
      setEmail(DataBaru["email"] || "");
      setNamaPeserta(DataBaru["namaPeserta"] || "");
      setTelPeserta(DataBaru["telPeserta"] || "");
      setEmailPeserta(DataBaru["emailPeserta"] || "");
      
      setIdPelatihanTerpilih(DataBaru["id_pelatihan"] ? DataBaru["id_pelatihan"].toString() : ""); 
      
    } catch (error) {
      console.error({ msg: "Gagal mengambil data pendaftar:", error });
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
    } catch (error) {
      console.error("Gagal mengambil data pelatihan:", error);
    }
  };

  useEffect(() => {
    Promise.all([fetchDataById(), fetchDataPelatihan()])
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const dataUntukKirim = {
        institusi: institusi,
        alamat: alamat,
        telepon: telepon,
        fax: fax,
        email: email,
        namaPeserta: namaPeserta,
        telPeserta: telPeserta,
        emailPeserta: emailPeserta,
        id_pelatihan: parseInt(idPelatihanTerpilih), 
    };

    try {
      await axios.put(`${API_URL}/${id}`, dataUntukKirim);
      
      alert('Data berhasil diperbaharui!');
      navigate('/admin/data-pendaftar');
    } catch (error) {
        console.error("Gagal Update Data (400 Bad Request):", error.response ? error.response.data : error);
        alert('Gagal memperbarui data! Pastikan semua field terisi dengan benar.');
    }
  };

  if (isLoading) {
    return <div className="container mt-5 text-center">Loading Data Edit...</div>;
  }

  return (
    <section className="bg-light py-5 mt-3">
      <form onSubmit={handleUpdate}>
        <div className="container">
          <h3 className="text-center mb-4">Data Institusi / Lembaga</h3>

          <div className="mb-3">
            <label htmlFor="institusi" className="form-label">
              Nama Institusi / Lembaga
            </label>
            <input
              type="text"
              placeholder="Nama Institusi / Lembaga"
              className="form-control"
              id="institusi"
              value={institusi}
              onChange={(e) => setInstitusi(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="alamat" className="form-label">
              Alamat
            </label>
            <textarea
              className="form-control"
              placeholder="Alamat Institusi"
              id="alamat"
              style={{ height: "100px" }}
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telepon" className="form-label">
              No Telepon
            </label>
            <input
              type="text"
              placeholder="No. Telepon Institusi"
              className="form-control"
              id="telepon"
              value={telepon}
              onChange={(e) => setTelepon(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="fax" className="form-label">
              No. Fax
            </label>
            <input
              type="text"
              className="form-control"
              id="fax"
              placeholder="No. Fax"
              value={fax}
              onChange={(e) => setFax(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Institusi
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email@contoh.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="container mt-4">
          <h3 className="text-center mb-4">Data Peserta</h3>

          <div className="mb-3">
            <label htmlFor="namaPeserta" className="form-label">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="form-control"
              id="namaPeserta"
              placeholder="Nama Peserta"
              value={namaPeserta}
              onChange={(e) => setNamaPeserta(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telPeserta" className="form-label">
              No Telepon Peserta
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="No. Telepon Peserta"
              id="telPeserta"
              value={telPeserta}
              onChange={(e) => setTelPeserta(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="emailPeserta" className="form-label">
              Email Peserta
            </label>
            <input
              type="email"
              className="form-control"
              id="emailPeserta"
              placeholder="email@contoh.com"
              value={emailPeserta}
              onChange={(e) => setEmailPeserta(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pelatihan" className="form-label">
              Pilih Pelatihan
            </label>
           <select
  id="pelatihan"
  className="form-select"
  value={idPelatihanTerpilih} 
  onChange={(e) => setIdPelatihanTerpilih(e.target.value)}
  required
>
  <option value="">-- Pilih Pelatihan --</option>
  {dataPelatihan.map((pelatihan) => (
    <option key={pelatihan.id} value={pelatihan.id.toString()}>
      {pelatihan.nama}
    </option>
  ))}
</select>
          </div>

          <div className="text-end pt-4">
             <button className="btn btn-primary" type="submit">
              Simpan Perubahan
            </button>
            <button className="btn btn-secondary ms-2" type="button" onClick={() => navigate('/admin/data-pendaftar')}>
              Batal
            </button>
          </div>
         
        </div>
      </form>
    </section>
  );
}