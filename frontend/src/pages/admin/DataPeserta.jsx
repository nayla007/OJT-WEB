import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "https://api.geomandirikreasi.pblweb0201.cloud/api/data-peserta"; 
const UPLOAD_API_URL = (id) => `https://api.geomandirikreasi.pblweb0201.cloud/api/data-peserta/upload/${id}`;
const SERTIFIKAT_BASE_URL = "https://api.geomandirikreasi.pblweb0201.cloud/uploads/sertifikat/"; 

export default function DataPeserta() {
    const [dataPeserta, setDataPeserta] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const [selectedFile, setSelectedFile] = useState(null);
    const [nomorSertifikat, setNomorSertifikat] = useState("");
    const [currentPendaftarId, setCurrentPendaftarId] = useState(null);

    const [showUploadModal, setShowUploadModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);

    const [detailData, setDetailData] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");

    const fetchDataPeserta = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(API_URL);
            setDataPeserta(response.data);
        } catch (error) {
            alert("Gagal mengambil data peserta!");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDataPeserta();
    }, []);

    const handleUpload = (peserta) => {
        setCurrentPendaftarId(peserta.id_data_pendaftar);
        setNomorSertifikat(peserta.nomorSertifikat || "");
        setShowUploadModal(true);
    };

    const handleDetail = (peserta) => {
        setDetailData(peserta);
        setShowDetailModal(true);
    };

    const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

    const submitUpload = async (e) => {
        e.preventDefault();

        if (!selectedFile || nomorSertifikat === "") {
            alert("Silakan isi nomor sertifikat & pilih file PDF!");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile); // harus sama dengan multer.single("file")
        formData.append("id_data_pendaftar", currentPendaftarId);
        formData.append("nomorSertifikat", nomorSertifikat);

        try {
            await axios.post(UPLOAD_API_URL(currentPendaftarId), formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            alert("Upload sertifikat berhasil!");
            setShowUploadModal(false);
            fetchDataPeserta();
        } catch (error) {
            console.error(error);
            alert("Gagal upload sertifikat!");
        }
    };

    const filteredData = dataPeserta.filter((item) => {
        const pendaftar = item.pendaftar || {};
        const pelatihan = pendaftar.pelatihan || {};
        const searchLower = searchTerm.toLowerCase();

        return (
            (pendaftar.namaPeserta && pendaftar.namaPeserta.toLowerCase().includes(searchLower)) ||
            (pendaftar.institusi && pendaftar.institusi.toLowerCase().includes(searchLower)) ||
            (pelatihan.nama_pelatihan && pelatihan.nama_pelatihan.toLowerCase().includes(searchLower)) ||
            (item.nomorSertifikat && item.nomorSertifikat.toLowerCase().includes(searchLower))
        );
    });

    if (isLoading) return <div className="text-center mt-5">Loading...</div>;

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Data Peserta Terkonfirmasi</h3>

            {/* SEARCH BAR */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Cari berdasarkan Nama Peserta, Institusi, atau Pelatihan..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="table-responsive">
                <table className="table table-striped table-bordered text-center">
                    <thead className="table-success">
                        <tr>
                            <th>No</th>
                            <th>Nama Peserta</th>
                            <th>Institusi</th>
                            <th>Pelatihan</th>
                            <th>Nomor Sertifikat</th>
                            <th>Status Sertifikat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map((data, index) => (
                            <tr key={data.id}>
                                <td>{index + 1}</td>
                                <td>{data.pendaftar?.namaPeserta || "N/A"}</td>
                                <td>{data.pendaftar?.institusi || "N/A"}</td> 
                                <td>{data.pendaftar?.pelatihanRef?.nama_pelatihan || "N/A"}</td> 
                                <td>{data.nomorSertifikat || "-"}</td>
                                <td>
                                    {data.fileSertifikat ? (
                                        <span className="badge bg-success">Ada</span>
                                    ) : (
                                        <span className="badge bg-danger">Kosong</span>
                                    )}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-info btn-sm me-2"
                                        onClick={() => handleDetail(data)}
                                    >
                                        Detail
                                    </button>

                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => handleUpload(data)}
                                    >
                                        Upload Sertifikat
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                {filteredData.length === 0 && (
                    <p className="text-center">Tidak ada data peserta ditemukan.</p>
                )}
            </div>

            {/* modal bisa uplod */}
            {showUploadModal && (
                <>
                    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5>Upload Sertifikat</h5>
                                    <button className="btn-close" onClick={() => setShowUploadModal(false)}></button>
                                </div>

                                <div className="modal-body">
                                    <form onSubmit={submitUpload}>
                                        <div className="mb-3">
                                            <label>Nomor Sertifikat</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={nomorSertifikat}
                                                onChange={(e) => setNomorSertifikat(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label>File Sertifikat (PDF)</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept="application/pdf"
                                                onChange={handleFileChange}
                                                required
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-success">Upload</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show"></div>
                </>
            )}

            {/* modal detail */}
            {showDetailModal && detailData && (
                <>
                    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title">Detail Peserta: {detailData.pendaftar?.namaPeserta}</h5>
                                    <button className="btn-close" onClick={() => setShowDetailModal(false)}></button>
                                </div>

                                <div className="modal-body">
                                    
                                    <h6 className="fw-bold text-primary mb-2">Informasi Umum</h6>
                                    <ul className="list-group list-group-flush mb-4">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <strong>Pelatihan:</strong>
                                            <span>{detailData.pendaftar?.pelatihanRef?.nama_pelatihan || "N/A"}</span>
                                        </li>
                                    </ul>

                                    <h6 className="fw-bold text-primary mb-2">Data Peserta</h6>
                                    <ul className="list-group list-group-flush mb-4">
                                        <li className="list-group-item"><strong>Nama:</strong> {detailData.pendaftar?.namaPeserta}</li>
                                        <li className="list-group-item"><strong>Email:</strong> {detailData.pendaftar?.emailPeserta}</li>
                                        <li className="list-group-item"><strong>Telepon:</strong> {detailData.pendaftar?.telPeserta}</li>
                                    </ul>

                                    <h6 className="fw-bold text-primary mb-2">Data Institusi</h6>
                                    <ul className="list-group list-group-flush mb-4">
                                        <li className="list-group-item"><strong>Institusi:</strong> {detailData.pendaftar?.institusi}</li>
                                        <li className="list-group-item"><strong>Alamat:</strong> {detailData.pendaftar?.alamat}</li>
                                        <li className="list-group-item"><strong>Email Institusi:</strong> {detailData.pendaftar?.email}</li>
                                    </ul>

                                    <h6 className="fw-bold text-primary mb-2">Sertifikat</h6>
                                    <ul className="list-group list-group-flush mb-4">
                                        <li className="list-group-item">
                                            <strong>Nomor Sertifikat:</strong> {detailData.nomorSertifikat || "-"}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>File Sertifikat:</strong> 
                                            {detailData.fileSertifikat ? (
                        <a
                          href={`https://api.geomandirikreasi.pblweb0201.cloud${detailData.fileSertifikat}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-success btn-sm ms-2"
                        >
                          Lihat File
                        </a>
                      ) : (
                        <span className="text-muted ms-2">Belum ada file</span>
                      )}
                                        </li>
                                    </ul>

                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={() => setShowDetailModal(false)}>Tutup</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show"></div>
                </>
            )}

        </div>
    );
}