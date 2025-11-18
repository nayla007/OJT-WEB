import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "https://api.geomandirikreasi.pblweb0201.cloud/api/cek"; 
const DOWNLOAD_API_URL = "https://api.geomandirikreasi.pblweb0201.cloud/api/download";

export default function Sertifikat() {
    const [nomorSertifikat, setNomorSertifikat] = useState('');
    const [pesertaData, setPesertaData] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setPesertaData(null);
        setErrorMsg('');
        setIsLoading(true);

        if (!nomorSertifikat) {
            setErrorMsg("Nomor sertifikat tidak boleh kosong.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.get(`${API_URL}?nomor=${nomorSertifikat}`);
            const data = response.data;
            data.namaPelatihan = data.pendaftar?.pelatihan?.nama_pelatihan || "N/A";
            
            setPesertaData(data);
            setIsLoading(false);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setErrorMsg("Nomor sertifikat tidak ditemukan atau tidak valid.");
            } else {
                setErrorMsg("Terjadi kesalahan saat mencari data.");
                console.error(error);
            }
            setIsLoading(false);
        }
    };

    const handleDownload = async () => {
        if (!pesertaData || !pesertaData.fileSertifikat) {
            alert("File sertifikat belum tersedia.");
            return;
        }

        try {
            const response = await axios.get(
                `${DOWNLOAD_API_URL}/${pesertaData.id}`, 
                { responseType: 'blob' } 
            );

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            
            const namaPesertaBersih = pesertaData.pendaftar.namaPeserta.replace(/[^a-zA-Z0-9]/g, '_');
            const namaFile = `Sertifikat_${pesertaData.nomorSertifikat}_${namaPesertaBersih}.pdf`;

            link.setAttribute('download', namaFile);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
            
            alert("Unduhan dimulai!");

        } catch (error) {
            alert("Gagal mengunduh file. Kemungkinan file tidak ditemukan di server.");
            console.error(error);
        }
    };


    return (
        <div className="container mt-5">
            <h3 className="mb-4 text-center">Verifikasi dan Unduh Sertifikat</h3>
            
            {/* Form Pencarian */}
            <form onSubmit={handleSearch} className="mb-5 p-4 border rounded shadow-sm mx-auto" style={{maxWidth: '500px'}}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Nomor Sertifikat..."
                        value={nomorSertifikat}
                        onChange={(e) => setNomorSertifikat(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                        {isLoading ? 'Mencari...' : 'Cari'}
                    </button>
                </div>
                {errorMsg && <p className="text-danger mt-2">{errorMsg}</p>}
            </form>

            {/* Hasil Pencarian */}
            {pesertaData && (
                <div className="card mx-auto" style={{maxWidth: '800px'}}>
                    <div className="card-header bg-success text-white">
                        Sertifikat Ditemukan!
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item"><strong>Nomor Sertifikat:</strong> {pesertaData.nomorSertifikat}</li>
                            <li className="list-group-item"><strong>Nama Peserta:</strong> {pesertaData.pendaftar.namaPeserta}</li>
                            <li className="list-group-item"><strong>Institusi:</strong> {pesertaData.pendaftar.institusi}</li>
                            <li className="list-group-item"><strong>Pelatihan:</strong> {pesertaData.pendaftar?.pelatihanRef?.nama_pelatihan || "N/A"}</li> 
                        </ul>
                        
                        <hr/>
                        
                        {pesertaData.fileSertifikat ? (
                            <button className="btn btn-warning" onClick={handleDownload}>
                                <i className="bi bi-download"></i> Unduh Sertifikat
                            </button>
                        ) : (
                            <p className="text-info">File sertifikat belum diunggah oleh admin.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}