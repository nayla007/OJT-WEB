import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import path from 'path';
import fs from 'fs';

// Base path untuk file fisik sertifikat
const UPLOAD_DIR = path.join(process.cwd(), 'uploads', 'sertifikat'); 

// 1. Upload sertifikat
export const uploadSertifikat = async (req, res) => {
    try {
        const { id_data_pendaftar, nomorSertifikat } = req.body;
        
        // Bersihkan spasi dari nomor sertifikat saat menyimpan
        const nomorSertifikatBersih = nomorSertifikat ? nomorSertifikat.trim() : null;

        // Path relatif yang disimpan di DB (misal: uploads/sertifikat/namafile.pdf)
        const fileName = req.file ? req.file.filename : null;

        const peserta = await prisma.DataPeserta.update({
            where: { id_data_pendaftar: Number(id_data_pendaftar) },
            data: {
                nomorSertifikat: nomorSertifikatBersih,
                fileSertifikat: fileName, 
            },
        });

        res.json({
            message: "Sertifikat berhasil diupload",
            data: peserta,
        });

    } catch (error) {
        console.error("ERROR ASLI UPLOAD:", error); 
        res.status(500).json({
            message: "Gagal upload sertifikat",
            errorDetail: error.message,
        });
    }
};

// 2. Cek sertifikat (pencarian nomor)
export const cekSertifikat = async (req, res) => {
    try {
        const { nomor } = req.query; 

        if (!nomor) {
            return res.status(400).json({ message: "Nomor sertifikat diperlukan." });
        }

        // Membersihkan spasi pada input user sebelum mencari
        const nomorBersih = nomor.trim(); 

        // Menggunakan findUnique karena nomorSertifikat adalah @unique
        const peserta = await prisma.DataPeserta.findUnique({ 
          where: { nomorSertifikat: nomorBersih }, 
          include: {
            pendaftar: {
              include: {
                pelatihanRef: true
              },
            },
          },
        });

        if (!peserta) {
          return res
            .status(404)
            .json({ message: "Nomor sertifikat tidak ditemukan" });
        }

        res.json(peserta);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan server saat mencari data." });
    }
};

// 3. Download Sertifikat
export const downloadSertifikat = async (req, res) => {
    const { id } = req.params; // ID dari dataPeserta (DataPeserta.id)

    try {
        const peserta = await prisma.DataPeserta.findUnique({
            where: { id: parseInt(id) },
            include: { pendaftar: true }
        });

        if (!peserta || !peserta.fileSertifikat) {
            return res.status(404).json({ message: "File tidak ditemukan atau belum diunggah." });
        }

        // Tentukan path absolut file dari path relatif yang tersimpan di DB
        const filePath = path.join(process.cwd(), peserta.fileSertifikat); 

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ message: "File fisik tidak ditemukan di server." });
        }

        // Tentukan nama file yang akan diunduh
        const namaPesertaBersih = peserta.pendaftar.namaPeserta.replace(/[^a-zA-Z0-9]/g, '_');
        const downloadFileName = `Sertifikat_${peserta.nomorSertifikat}_${namaPesertaBersih}.pdf`;

        res.download(filePath, downloadFileName, (err) => {
            if (err) {
                console.error("Download Error:", err);
                return res.status(500).json({ message: "Gagal memproses unduhan file." });
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan saat download file" });
    }
};