import express from 'express';
import { getAllAdmins, getAllPendingAdmins, updateAdminStatus } from '../controllers/AdminController.js';
import auth from '../middlewares/Auth.js';
import superAdminOnly from '../middlewares/SuperAdminOnly.js';

const router = express.Router();

router.get('/all', auth, superAdminOnly, getAllAdmins);
router.get('/pending', auth, superAdminOnly, getAllPendingAdmins);
router.put('/:id/:status', auth, superAdminOnly, updateAdminStatus);

export default router;