import express from "express";
import { 
    getDataPendaftar,
    getDataPendaftarById,
    createDataPendaftar,
    updateDataPendaftar,
    deleteDataPendaftar,
    uploadBuktiDanKonfirmasi
    } from "../controllers/DataPendaftarController.js";
import { uploadBuktiMiddleware } from "../middlewares/BuktiBayar.js";

const router = express.Router();

router.get('/', getDataPendaftar);
router.get('/:id', getDataPendaftarById);
router.post('/', createDataPendaftar);
router.put('/:id', updateDataPendaftar);
router.delete('/:id', deleteDataPendaftar);
router.post(
  "/data-peserta/konfirmasi", 
  uploadBuktiMiddleware.single('buktiDaftarUlang'), 
  uploadBuktiDanKonfirmasi
);

export default router;