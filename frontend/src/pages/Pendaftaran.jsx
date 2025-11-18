import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.geomandirikreasi.pblweb0201.cloud/api/data-pendaftar";
const PELATIHAN_API_URL = "https://api.geomandirikreasi.pblweb0201.cloud/daftar-pelatihan";

export default function Pendaftaran() {
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

  const fetchDataPelatihan = async () => {
    try {
      const response = await axios.get(PELATIHAN_API_URL);
      const data = response.data.map(p => ({ 
        id: p.id_pelatihan, 
        nama: p.nama_pelatihan 
      })); 
      setDataPelatihan(data);
      if (data.length > 0) {
        setIdPelatihanTerpilih(data[0].id.toString());
      }
    } catch (error) {
      console.error("Gagal mengambil data pelatihan:", error);
    }
  };

  useEffect(() => {
    fetchDataPelatihan();
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!idPelatihanTerpilih) {
        alert("Mohon pilih Pelatihan terlebih dahulu.");
        return;
    }

    const dataToSend = {
        institusi: institusi,
        alamat: alamat,
        telepon: telepon,
        fax: fax,
        email: email,
        namaPeserta: namaPeserta,
        telPeserta: telPeserta,
        emailPeserta: emailPeserta,
        id_pelatihan: parseInt(idPelatihanTerpilih)
    };

    axios
      .post(API_URL, dataToSend)
      .then((response) => {
        alert("Pendaftaran berhasil! Silakan tunggu konfirmasi selanjutnya.");
        
        setInstitusi("");
        setAlamat("");
        setTelepon("");
        setFax("");
        setEmail("");
        setNamaPeserta("");
        setTelPeserta("");
        setEmailPeserta("");
        setIdPelatihanTerpilih(dataPelatihan.length > 0 ? dataPelatihan[0].id.toString() : ""); 
      })
      .catch((error) => {
        console.error("Gagal Menyimpan Data:", error.response ? error.response.data : error);
        alert("Gagal melakukan pendaftaran. Pastikan semua data terisi dengan benar.");
      });
  };

  return (
    <section className="bg-light py-5 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="container p-5">
          <h3 className="text-center mb-4">Data Institusi / Lembaga </h3>

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

        <div className="container p-5">
          <h3 className="text-center mb-4">Data Peserta </h3>

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

          <div className="mb-4">
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
              {dataPelatihan.map((pelatihanItem) => (
                  <option key={pelatihanItem.id} value={pelatihanItem.id}>
                      {pelatihanItem.nama}
                  </option>
              ))}
            </select>
          </div>

          <div className="text-center pt-3">
            <button className="btn btn-primary" type="submit">
              Daftar Pelatihan
            </button>
          </div>
        </div>
      </form>


      <div className="text-center pt-4">
        <p className="mb-2">--- atau ---</p>
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