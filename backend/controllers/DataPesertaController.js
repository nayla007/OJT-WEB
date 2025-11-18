import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ✅ GET semua peserta
export const getDataPeserta = async (req, res) => {
  try {
    const peserta = await prisma.DataPeserta.findMany({
      include: {
        pendaftar: {
          include: { pelatihanRef: true },
        },
      },
    });
    res.status(200).json(peserta);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// ✅ GET peserta by ID
export const getDataPesertaById = async (req, res) => {
  const { id } = req.params;
  try {
    const peserta = await prisma.DataPeserta.findUnique({
      where: { id: parseInt(id) },
      include: {
        pendaftar: { include: { pelatihanRef: true } },
      },
    });
    if (!peserta) return res.status(404).json({ msg: "Data peserta tidak ditemukan" });
    res.status(200).json(peserta);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// ✅ Konfirmasi peserta dari DataPendaftar
export const createDataPeserta = async (req, res) => {
    const { id_data_pendaftar, nomorSertifikat } = req.body;
    const pendaftarId = parseInt(id_data_pendaftar);

    try {
        // 1. Cek Pendaftar
        const pendaftar = await prisma.datapendaftar.findUnique({
            where: { id: pendaftarId },
        });
        if (!pendaftar) {
            return res.status(404).json({ msg: "Data pendaftar tidak ditemukan!" });
        }

        
        // 2. Gunakan Transaction untuk memastikan konsistensi
        const result = await prisma.$transaction(async (tx) => {
            
            // 2A. Buat data peserta baru
            const pesertaBaru = await tx.DataPeserta.create({
                data: {
                    id_data_pendaftar: pendaftarId,
                    nomorSertifikat: nomorSertifikat || null,
                },
            });

            // 2B. Update status pendaftar menjadi "TERKONFIRMASI"
            await tx.dataPendaftar.update({
                where: { id: pendaftarId },
                data: { status: "TERKONFIRMASI" },
            });
            
            return pesertaBaru;
        });

        res.status(201).json({
            msg: "Peserta berhasil dikonfirmasi!",
            data: result,
        });
    } catch (error) {
        // 3. Penanganan Error Duplikat (Pendaftar sudah dikonfirmasi)
        if (error.code === 'P2002') { 
            return res.status(409).json({ msg: "Pendaftar ini sudah dikonfirmasi dan terdaftar sebagai peserta." });
        }
        console.error(error);
        res.status(400).json({ msg: error.message });
    }
};


// ✅ Upload sertifikat PDF
export const uploadSertifikatPeserta = async (req, res) => {
  const { id } = req.params;
  const { nomorSertifikat } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ msg: "File sertifikat belum diunggah!" });
    }

    const filePath = `/uploads/sertifikat/${req.file.filename}`;

    const updated = await prisma.DataPeserta.update({
      where: { id: parseInt(id) },
      data: { fileSertifikat: filePath,
        nomorSertifikat: nomorSertifikat?.trim() || undefined, // <-- tambahkan ini
       },
      
    });

    res.status(200).json({
      msg: "Sertifikat berhasil diunggah!",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// ✅ Cek sertifikat berdasarkan nomor
export const getSertifikatByNomor = async (req, res) => {
  const { nomor } = req.params;

  try {
    const peserta = await prisma.DataPeserta.findUnique({
      where: { nomorSertifikat: nomor },
      include: {
        pendaftar: { include: { pelatihanRef: true } },
      },
    });

    if (!peserta) return res.status(404).json({ msg: "Nomor sertifikat tidak ditemukan" });

    res.status(200).json(peserta);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

