import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = "./uploads/pelatihan";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `pelatihan-${Date.now()}${ext}`);
  },
});

const uploadPelatihan = multer({ storage });
export default uploadPelatihan;
