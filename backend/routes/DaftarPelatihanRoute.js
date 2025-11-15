import express from "express";
import {
    getDaftarPelatihan,
    getDaftarPelatihanById,
    createDaftarPelatihan,
    updateDaftarPelatihan,
    deleteDaftarPelatihan
} from "../controllers/DaftarPelatihanController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.get('/', getDaftarPelatihan);
router.get('/:id', getDaftarPelatihanById);
router.post('/', upload.single('file'), createDaftarPelatihan);
router.put('/:id', upload.single('file'), updateDaftarPelatihan);
router.delete('/:id', deleteDaftarPelatihan);

export default router;
