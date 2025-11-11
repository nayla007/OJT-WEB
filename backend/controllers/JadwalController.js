import { PrismaClient } from "../src/generated/index.js";
const prisma = new PrismaClient();

export const getAllJadwal = async (req, res) => {
  try {
    const data = await prisma.jadwal.findMany();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};

export const getJadwalById = async (req, res) => {
  try {
    const jadwal = await prisma.jadwal.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!jadwal) return res.status(404).json({ message: "Data tidak ditemukan" });
    res.json(jadwal);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
};

export const createJadwal = async (req, res) => {
  try {
    const { bidang, nama, harga, jmlHari, bulan, tanggal } = req.body;
    const newJadwal = await prisma.jadwal.create({
      data: {
        bidang,
        nama,
        harga: Number(harga),
        jmlHari: Number(jmlHari),
        bulan,
        tanggal,
      },
    });
    res.json(newJadwal);
  } catch (err) {
    res.status(400).json({ message: "Gagal menambah jadwal", error: err.message });
  }
};

export const updateJadwal = async (req, res) => {
  try {
    const { bidang, nama, harga, jmlHari, bulan, tanggal } = req.body;
    const update = await prisma.jadwal.update({
      where: { id: Number(req.params.id) },
      data: { bidang, nama, harga: Number(harga), jmlHari: Number(jmlHari), bulan, tanggal },
    });
    res.json(update);
  } catch (err) {
    res.status(400).json({ message: "Gagal mengupdate", error: err.message });
  }
};

export const deleteJadwal = async (req, res) => {
  try {
    await prisma.jadwal.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: "Berhasil dihapus" });
  } catch (err) {
    res.status(404).json({ message: "Data tidak ditemukan" });
  }
};
