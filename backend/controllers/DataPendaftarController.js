import { PrismaClient } from "../src/generated/index.js";

const prisma = new PrismaClient();

export const getDataPendaftar = async (req, res) => {
  try {
    const response = await prisma.DataPendaftar.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getDataPendaftarById = async (req, res) => {
  try {
    const response = await prisma.DataPendaftar.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createDataPendaftar = async (req, res) => {
  const {
    institusi,
    alamat,
    telepon,
    fax,
    email,
    namaPeserta,
    telPeserta,
    emailPeserta,
    pelatihan,
  } = req.body;
  try {
    const DataPendaftar = await prisma.DataPendaftar.create({
      data: {
        institusi: institusi,
        alamat: alamat,
        telepon: telepon,
        fax: fax,
        email: email,
        namaPeserta: namaPeserta,
        telPeserta: telPeserta,
        emailPeserta: emailPeserta,
        pelatihan: pelatihan,
      },
    });
    res.status(201).json({
        msg: "Data Pendaftar berhasil ditambahkan!",
        data: DataPendaftar
    })
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};

export const updateDataPendaftar = async (req, res) => {
    const { id } = req.params;
    const {institusi, alamat, telepon, fax, email,
    namaPeserta, telPeserta, emailPeserta, pelatihan} = req.body;

    try {
        const DataPendaftar = await prisma.DataPendaftar.update({
            where: {
                id : parseInt(id)
            },
            data: {
                institusi: institusi,
                alamat: alamat,
                telepon: telepon,
                fax: fax,
                email: email,
                namaPeserta: namaPeserta,
                telPeserta: telPeserta,
                emailPeserta: emailPeserta,
                pelatihan: pelatihan,
            },
    });
    res.status(200).json({
        msg: "Data Pendaftar berhasil diperbaharui!",
        data: DataPendaftar
    })
  } catch (error) {
    console.error(error);
    res.status(400).json({ msg: error.message });
  }
};
    

export const deleteDataPendaftar = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.DataPendaftar.delete({
            where: { id: parseInt(id)}
        });
        res.status(200).json({ msg: "Data Pendaftar berhasil dihapus!"})
    } catch (error) {
        console.error(error);
        res.status(404).json({msg: "Data tidak ditemukan!"})
    }
};