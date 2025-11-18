import multer from "multer";
import path from "path";
import fs from "fs";

// --- KONFIGURASI KHUSUS BUKTI PEMBAYARAN ---

// Direktori tempat file bukti pembayaran akan disimpan
const uploadDirBukti = "./uploads/bukti";
if (!fs.existsSync(uploadDirBukti)) {
  fs.mkdirSync(uploadDirBukti, { recursive: true });
}

// Konfigurasi penyimpanan file untuk bukti pembayaran
const storageBukti = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirBukti);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    // Menggunakan id pendaftar + timestamp
    const id = req.body.id_data_pendaftar || 'temp'; 
    const uniqueName = `bukti-bayar-${id}-${Date.now()}${ext}`;
    cb(null, uniqueName);
  },
});

// Filter untuk menerima Gambar (JPG/PNG) atau PDF
const fileFilterBukti = (req, file, cb) => {
  if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Hanya file PDF, JPEG, atau PNG yang diizinkan untuk bukti pembayaran!"), false);
  }
};

// Instance Multer yang diekspor untuk Bukti Pembayaran
export const uploadBuktiMiddleware = multer({ 
    storage: storageBukti, 
    fileFilter: fileFilterBukti,
    limits: { fileSize: 5 * 1024 * 1024 } // Maks 5MB
});