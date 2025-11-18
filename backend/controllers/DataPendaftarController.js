import { PrismaClient } from "@prisma/client";
import fs from "fs"; // Import fs untuk menghapus file lama jika diperlukan
import path from "path";

const prisma = new PrismaClient();

// Direktori tempat file bukti pembayaran disimpan (harus konsisten dengan Multer)
const UPLOAD_DIR_BUKTI = "./uploads/bukti"; 

// Fungsi Helper untuk memformat data pendaftar agar menyertakan nama pelatihan
const formatDataPendaftar = (data) => {
  return data.map(item => ({
    ...item,
    // Menggunakan kolom yang benar dari skema Prisma: pelatihan.nama_pelatihan
    nama_pelatihan: item.pelatihan ? item.pelatihan.nama_pelatihan : 'N/A', 
    buktiBayar: item.buktiBayar, 
  }));
};

// GET semua data
export const getDataPendaftar = async (req, res) => {
  try {
    const data = await prisma.datapendaftar.findMany({
      include: { pelatihanRef: true },
      orderBy: { id: 'desc' }, 
    });
    
    res.status(200).json(formatDataPendaftar(data)); 
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


export const getDataPendaftarById = async (req, res) => {
  try {
    const response = await prisma.datapendaftar.findUnique({
      where: { id: Number(req.params.id) },
      include: { pelatihanRef: true },
    });

    if (!response) {
      return res.status(404).json({ msg: "Data pendaftar tidak ditemukan" });
    }


    res.status(200).json({
        ...response,
        nama_pelatihan: response.pelatihan ? response.pelatihan.nama_pelatihan : 'N/A',
        buktiBayar: response.buktiBayar,
    });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createDataPendaftar = async (req, res) => {
  const {
    institusi, alamat, telepon, fax, email,
    namaPeserta, telPeserta, emailPeserta,
    id_pelatihan,
  } = req.body;

  try {
    const datapendaftar = await prisma.datapendaftar.create({
      data: {
        institusi,
        alamat,
        telepon,
        fax,
        email,
        namaPeserta,
        telPeserta,
        emailPeserta,
        id_pelatihan: Number(id_pelatihan),
        status: "MENUNGGU_BAYAR",
      },
    });

    res.status(201).json({
      msg: "Data Pendaftar berhasil ditambahkan!",
      data: datapendaftar,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};

export const updateDataPendaftar = async (req, res) => {
    const { id } = req.params;

  try {
    const dataPendaftar = await prisma.datapendaftar.update({
      where: { id: Number(id) },
      data: req.body,
    });

    res.status(200).json({
      msg: "Data pendaftar berhasil diperbarui!",
      data: dataPendaftar,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
    

export const deleteDataPendaftar = async (req, res) => {
    const id = Number(req.params.id);

  try {
    // 1. Ambil data pendaftar untuk mendapatkan nama file bukti
    const dataToDelete = await prisma.datapendaftar.findUnique({
        where: { id },
        select: { buktiBayar: true }
    });

    // 2. Hapus entri di DataPeserta (jika ada, karena relasi cascade atau manual)
    // Asumsi: Kita hapus DataPendaftar, DataPeserta (jika ada relasi) mungkin terhapus otomatis. 
    // Jika tidak, Anda perlu menambahkan langkah penghapusan DataPeserta di sini.
    
    // 3. Hapus DataPendaftar
    await prisma.datapendaftar.delete({
      where: { id },
    });

    // 4. Hapus file fisik (buktiBayar) jika ada
    if (dataToDelete && dataToDelete.buktiBayar) {
        const filePath = path.join(UPLOAD_DIR_BUKTI, dataToDelete.buktiBayar);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`File buktiBayar ${dataToDelete.buktiBayar} berhasil dihapus.`);
        }
    }

    res.status(200).json({ msg: "Data pendaftar berhasil dihapus!" });
  } catch (error) {
    console.error("Error saat menghapus data pendaftar:", error);
    res.status(404).json({ msg: "Gagal menghapus data atau data tidak ditemukan!" });
  }
};

// 🔥 FUNGSI UPLOAD BUKTI DAN KONFIRMASI
export const uploadBuktiDanKonfirmasi = async (req, res) => {
  const { id_data_pendaftar } = req.body; 
  
  if (!req.file) {
    return res.status(400).json({ msg: "File bukti pembayaran tidak ditemukan!" });
  }

  const buktiBayarFileName = req.file.filename; 

  try {
    // 1. Update DataPendaftar: simpan nama file dan ubah status
    const data = await prisma.datapendaftar.update({
      where: { id: Number(id_data_pendaftar) },
      data: {
        status: "TERKONFIRMASI", 
        buktiBayar: buktiBayarFileName, // Kolom buktiBayar di DataPendaftar
      },
    });

    // 2. Buat entri baru di DataPeserta (asumsi DataPeserta memiliki id_data_pendaftar)
    await prisma.DataPeserta.create({
        data: {
            id_data_pendaftar: Number(id_data_pendaftar),
            // Asumsi kolom lain di DataPeserta akan diisi dari data yang terupdate atau default
        }
    });

    res.status(200).json({
      msg: "Upload bukti dan konfirmasi berhasil!",
      fileName: buktiBayarFileName,
      data,
    });
  } catch (error) {
    console.error("Error konfirmasi:", error);
    // Jika terjadi error, hapus file yang baru diupload agar tidak menumpuk
    if (req.file) {
        const filePath = path.join(UPLOAD_DIR_BUKTI, req.file.filename);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
    res.status(400).json({ msg: error.message });
  }
};