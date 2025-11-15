// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const API_URL = "http://localhost:5000/api/pendaftar/data-pendaftar"; 

// export default function DataPendaftar() {
//     const [dataPendaftar, setDataPendaftar] = useState([]);
//     const navigate = useNavigate();

//     const fetchDataPendaftar = async () => {
//         try {
//             const response = await axios.get(API_URL);
//             setDataPendaftar(response.data);
//         } catch (error) {
//             console.error("Gagal mengambil data pendaftar:", error);
//         }
//     };
    
//     useEffect(() => {
//         fetchDataPendaftar();
//     }, []); 

//     const handleUpdate = (id) => {
//     navigate(`/admin/data-pendaftar/edit/${id}`)
// }



//     const handleDelete = (id) => {
//         const confirmDelete = window.confirm(
//             "Apakah yakin akan menghapus data ini?"
//         );
//         if (!confirmDelete) return;

//         axios
//             .delete(`http://localhost:5000/api/pendaftar/data-pendaftar/${id}`)
//             .then(response =>{
//                 fetchDataPendaftar();
//                 alert('Data Berhasil dihapus')
//             })
//             .catch(error => {
                
//             })
//             .finally(() => {
                
//             })
//     }

//     return (
//         <div className="container mt-5">
//   <h3>Data Pendaftar Peserta Pelatihan</h3>

//   <div className="table-responsive">
//     <table className="table table-striped table-bordered align-middle text-center">
//       <thead className="table-success">
//         <tr>
//           <th style={{ width: "50px" }}>No.</th>
//           <th style={{ minWidth: "150px" }}>Institusi</th>
//           <th style={{ minWidth: "200px" }}>Alamat</th>
//           <th style={{ minWidth: "120px" }}>Telepon</th>
//           <th style={{ minWidth: "120px" }}>Fax</th>
//           <th style={{ minWidth: "180px" }}>Email</th>
//           <th style={{ minWidth: "150px" }}>Nama Peserta</th>
//           <th style={{ minWidth: "150px" }}>Telepon Peserta</th>
//           <th style={{ minWidth: "180px" }}>Email Peserta</th>
//           <th style={{ minWidth: "220px", wordBreak: "break-word" }}>Pelatihan</th>
//           <th style={{ width: "100px" }}>Aksi</th>
//         </tr>
//       </thead>

//       <tbody>
//         {dataPendaftar.map((data, index) => (
//           <tr key={data.id}>
//             <td>{index + 1}</td>
//             <td className="text-break">{data.institusi}</td>
//             <td className="text-break">{data.alamat}</td>
//             <td>{data.telepon}</td>
//             <td>{data.fax}</td>
//             <td className="text-break">{data.email}</td>
//             <td className="text-break">{data.namaPeserta}</td>
//             <td>{data.telPeserta}</td>
//             <td className="text-break">{data.emailPeserta}</td>
//             <td className="text-break">{data.pelatihan}</td>
//             <td>
//               <button
//                 className="btn btn-warning btn-sm me-2"
//                 onClick={() => handleUpdate(data.id)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="btn btn-danger btn-sm"
//                 onClick={() => handleDelete(data.id)}
//               >
//                 Hapus
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>

//     );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal } from "bootstrap"; // ⬅️ tambahkan ini
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const API_URL = "http://localhost:5000/api/data-pendaftar"; 

export default function DataPendaftar() {
  const [dataPendaftar, setDataPendaftar] = useState([]);
  const [formData, setFormData] = useState({
    institusi: "",
    alamat: "",
    telepon: "",
    fax: "",
    email: "",
    namaPeserta: "",
    telPeserta: "",
    emailPeserta: "",
    pelatihan: "",
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

  useEffect(() => {
    fetchDataPendaftar();
  }, []);

const handleAdd = async (e) => {
  e.preventDefault();
  e.stopPropagation(); // 🔹 cegah event double

  try {
    await axios.post(API_URL, formData);
    alert("Data berhasil ditambahkan!"); // 🔹 alert sukses
    const modalElement = document.getElementById("tambahModal");
    const modal = Modal.getInstance(modalElement) || new Modal(modalElement);
    modal.hide();

    // 🧹 Bersihkan backdrop gelap yang tertinggal
    document.body.classList.remove("modal-open");
    document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
    
    fetchDataPendaftar(); // 🔹 refresh data tabel

    // 🔹 reset form
    setFormData({
      institusi: "",
      alamat: "",
      telepon: "",
      fax: "",
      email: "",
      namaPeserta: "",
      telPeserta: "",
      emailPeserta: "",
      pelatihan: "",
    });

    return; // 🔹 stop biar nggak lanjut ke catch
  } catch (error) {
    console.error("Error saat menambah data:", error);
    alert("Gagal menambahkan data!");
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

    <div
      className="modal fade"
      id="tambahModal"
      tabIndex="-1"
      aria-labelledby="tambahModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="tambahModalLabel">Tambah Data Pendaftar</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleAdd}>
              <div className="mb-3">
                <h4>Data Institusi/Lembaga</h4>
                <div className="col mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Institusi"
                    value={formData.institusi}
                    onChange={(e) => setFormData({...formData, institusi: e.target.value})}
                    required
                  />
                </div>
                <div className="col mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Alamat"
                    value={formData.alamat}
                    onChange={(e) => setFormData({...formData, alamat: e.target.value})}
                    required
                  />
                </div>
                <div className="col mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telepon"
                    value={formData.telepon}
                    onChange={(e) => setFormData({...formData, telepon: e.target.value})}
                  />
                </div>
                <div className="col mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fax"
                    value={formData.fax}
                    onChange={(e) => setFormData({...formData, fax: e.target.value})}
                  />
                </div>
                <div className="col mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <h4>Data Peserta</h4>
                <div className="col mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Peserta"
                    value={formData.namaPeserta}
                    onChange={(e) => setFormData({...formData, namaPeserta: e.target.value})}
                  />
                </div>
                <div className="col mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telepon Peserta"
                    value={formData.telPeserta}
                    onChange={(e) => setFormData({...formData, telPeserta: e.target.value})}
                  />
                </div>
                <div className="col mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Peserta"
                    value={formData.emailPeserta}
                    onChange={(e) => setFormData({...formData, emailPeserta: e.target.value})}
                  />
                </div>
                <div className="col mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pelatihan"
                    value={formData.pelatihan}
                    onChange={(e) => setFormData({...formData, pelatihan: e.target.value})}
                  />
                </div>
              </div>

              <div className="mt-4 text-end">
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

    <div className="table-responsive">
      <table className="table table-striped table-bordered align-middle text-center">
        <thead className="table-success">
          <tr>
            <th>No.</th>
            <th>Institusi</th>
            <th>Alamat</th>
            <th>Telepon</th>
            <th>Fax</th>
            <th>Email</th>
            <th>Nama Peserta</th>
            <th>Telepon Peserta</th>
            <th>Email Peserta</th>
            <th>Pelatihan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataPendaftar.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.institusi}</td>
              <td>{data.alamat}</td>
              <td>{data.telepon}</td>
              <td>{data.fax}</td>
              <td>{data.email}</td>
              <td>{data.namaPeserta}</td>
              <td>{data.telPeserta}</td>
              <td>{data.emailPeserta}</td>
              <td>{data.pelatihan}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleUpdate(data.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(data.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

  
}