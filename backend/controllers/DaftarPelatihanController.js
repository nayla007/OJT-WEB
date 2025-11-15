import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDaftarPelatihan = async (req, res) => {
  try {
    const response = await prisma.data_pelatihan.findMany({
      include: { kategori: true },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDaftarPelatihanById = async (req, res) => {
  try {
    const response = await prisma.data_pelatihan.findUnique({
      where: {
        id_pelatihan: parseInt(req.params.id),
      },
      include: { kategori: true },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createDaftarPelatihan = async (req, res) => {
  console.log("BACKEND MENERIMA:", req.body);

  const {
    id_kategori,
    nama_pelatihan,
    tujuan,
    persyaratan,
    materi_pembelajaran,
    instruktur,
    sertifikasi,
    metode_pembelajaran,
    biaya,
    fasilitas,
    contact,
  } = req.body;

  const file_url = req.file ? req.file.filename : null; // ← Tambahan

  try {
    const DataPendaftar = await prisma.data_pelatihan.create({
      data: {
        id_kategori: parseInt(id_kategori),
        nama_pelatihan,
        tujuan,
        persyaratan,
        materi_pembelajaran,
        instruktur,
        sertifikasi,
        metode_pembelajaran,
        biaya,
        fasilitas,
        contact,
        file_url,
      },
    });

    res.status(201).json({
      msg: "Daftar Pelatihan berhasil ditambahkan!",
      data: DataPendaftar,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};

export const updateDaftarPelatihan = async (req, res) => {
  const { id } = req.params;

  const old = await prisma.data_pelatihan.findUnique({
    where: { id_pelatihan: parseInt(id) },
  });

  if (!old) return res.status(404).json({ msg: "Data tidak ditemukan!" });

  let file_url = old.file_url;

  // jika ada file baru → hapus lama
  if (req.file) {
    const fs = await import("fs");

    if (old.file_url) {
      try {
        await fs.promises.unlink(`uploads/${old.file_url}`);
      } catch (error) {
        console.warn("File lama tidak ditemukan, skip");
      }
    }

    file_url = req.file.filename;
  }

  const {
    id_kategori,
    nama_pelatihan,
    tujuan,
    persyaratan,
    materi_pembelajaran,
    instruktur,
    sertifikasi,
    metode_pembelajaran,
    biaya,
    fasilitas,
    contact,
  } = req.body;

  try {
    const DaftarPelatihan = await prisma.data_pelatihan.update({
      where: {
        id_pelatihan: parseInt(id),
      },
      data: {
        id_kategori: parseInt(id_kategori),
        nama_pelatihan,
        tujuan,
        persyaratan,
        materi_pembelajaran,
        instruktur,
        sertifikasi,
        metode_pembelajaran,
        biaya,
        fasilitas,
        contact,
        file_url,
      },
    });

    res.status(200).json({
      msg: "Daftar Pelatihan berhasil diperbaharui!",
      data: DaftarPelatihan,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};

export const deleteDaftarPelatihan = async (req, res) => {
  const { id } = req.params;

  try {
    const old = await prisma.data_pelatihan.findUnique({
      where: { id_pelatihan: parseInt(id) },
    });

    if (!old) return res.status(404).json({ msg: "Data tidak ditemukan!" });

    if (old.file_url) {
      const fs = await import("fs");
      try {
        await fs.promises.unlink(`uploads/${old.file_url}`);
      } catch (error) {
        console.warn("File lama tidak ditemukan, skip");
      }
    }

    await prisma.data_pelatihan.delete({
      where: { id_pelatihan: parseInt(id) },
    });

    res.status(200).json({ msg: "Daftar Pelatihan berhasil dihapus!" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ msg: "Data tidak ditemukan!" });
  }
};
