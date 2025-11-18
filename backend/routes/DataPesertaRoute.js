import express from "express";
import {
  getDataPeserta,
  getDataPesertaById,
  createDataPeserta,
  uploadSertifikatPeserta,
  getSertifikatByNomor,
//   getPesertaTerkonfirmasi,
} from "../controllers/DataPesertaController.js";
import { uploadMiddleware } from "../middlewares/UploadSertifikat.js";

const router = express.Router();

router.get("/data-peserta", getDataPeserta);
router.get("/data-peserta/:id", getDataPesertaById);
router.post("/data-peserta", createDataPeserta);
router.post(
  "/data-peserta/upload/:id",
  uploadMiddleware.single("file"),
  uploadSertifikatPeserta
);
router.get("/sertifikat/:nomor", getSertifikatByNomor);
// router.get("/konfirmasi", getPesertaTerkonfirmasi);

export default router;