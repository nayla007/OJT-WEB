import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function DaftarPelatihanEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [kategori, setKategori] = useState([]);
  const [data, setData] = useState({});
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get("https://api.geomandirikreasi.pblweb0201.cloud/kategori-pelatihan")
      .then((res) => setKategori(res.data));

    axios.get(`https://api.geomandirikreasi.pblweb0201.cloud/daftar-pelatihan/${id}`)
      .then((res) => setData(res.data));
  }, [id]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    for (const key in data) {
      if (key !== "file_url") formData.append(key, data[key]);
    }

    if (file) formData.append("file", file);

    await axios.put(
      `https://api.geomandirikreasi.pblweb0201.cloud/daftar-pelatihan/${id}`,
      formData
    );

    alert("Data berhasil diupdate");

    // Redirect setelah update
    navigate("/admin/daftar-pelatihan");
  };

  return (
    <div className="container mt-4">
      <h3>Edit Pelatihan</h3>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Kategori</label>
          <select
            className="form-control"
            name="id_kategori"
            value={data.id_kategori || ""}
            onChange={handleChange}
          >
            {kategori.map((k) => (
              <option key={k.id_kategori} value={k.id_kategori}>
                {k.nama_kategori}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label>Nama Pelatihan</label>
          <input
            className="form-control"
            name="nama_pelatihan"
            value={data.nama_pelatihan || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Tujuan</label>
          <textarea
            className="form-control"
            name="tujuan"
            value={data.tujuan || ""}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Persyaratan</label>
          <textarea
            className="form-control"
            name="persyaratan"
            value={data.persyaratan || ""}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Materi Pembelajaran</label>
          <textarea
            className="form-control"
            name="materi_pembelajaran"
            value={data.materi_pembelajaran || ""}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Instruktur</label>
          <input
            className="form-control"
            name="instruktur"
            value={data.instruktur || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Sertifikasi</label>
          <input
            className="form-control"
            name="sertifikasi"
            value={data.sertifikasi || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Metode Pembelajaran</label>
          <input
            className="form-control"
            name="metode_pembelajaran"
            value={data.metode_pembelajaran || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Biaya</label>
          <input
            className="form-control"
            name="biaya"
            value={data.biaya || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Fasilitas</label>
          <input
            className="form-control"
            name="fasilitas"
            value={data.fasilitas || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Contact</label>
          <input
            className="form-control"
            name="contact"
            value={data.contact || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Upload File Baru</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
