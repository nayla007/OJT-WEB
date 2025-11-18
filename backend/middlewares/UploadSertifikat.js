import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = "./uploads/sertifikat";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `sertifikat-${Date.now()}${ext}`);
  },
});

// hanya PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") cb(null, true);
  else cb(new Error("Hanya file PDF yang diizinkan!"), false);
};

export const uploadMiddleware = multer({ storage, fileFilter });
