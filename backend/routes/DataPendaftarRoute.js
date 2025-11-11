import express from "express";
import { 
    getDataPendaftar,
    getDataPendaftarById,
    createDataPendaftar,
    updateDataPendaftar,
    deleteDataPendaftar
    } from "../controllers/DataPendaftarController.js";

const router = express.Router();

router.get('/data-pendaftar', getDataPendaftar);
router.get('/data-pendaftar/:id', getDataPendaftarById);
router.post('/data-pendaftar', createDataPendaftar);
router.put('/data-pendaftar/:id', updateDataPendaftar);
router.delete('/data-pendaftar/:id', deleteDataPendaftar);

export default router;