import express from "express";
import {
    getDaftarPelatihan,
    getDaftarPelatihanById,
    createDaftarPelatihan,
    updateDaftarPelatihan,
    deleteDaftarPelatihan
} from "../controllers/DaftarPelatihanController.js";
import uploadPelatihan from "../middlewares/UploadPelatihan.js";

const router = express.Router();

router.get('/', getDaftarPelatihan);
router.get('/:id', getDaftarPelatihanById);
router.post('/', uploadPelatihan.single('file'), createDaftarPelatihan);
router.put('/:id', uploadPelatihan.single('file'), updateDaftarPelatihan);
router.delete('/:id', deleteDaftarPelatihan);

export default router;
