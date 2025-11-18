import express from "express";
import { uploadMiddleware } from "../middlewares/UploadSertifikat.js";
import { uploadSertifikat, cekSertifikat, downloadSertifikat } from "../controllers/SertifikatController.js";

const router = express.Router();

router.post("/upload", uploadMiddleware.single("fileSertifikat"), uploadSertifikat);
router.get("/cek", cekSertifikat); 
router.get("/download/:id", downloadSertifikat);

export default router;