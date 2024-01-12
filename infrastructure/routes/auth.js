import express from 'express';
import requiredFields from '../middeware/requiredFields.js';
const router = express.Router();

import loginController from '../controllers/Auth/loginController.js';

const loginctrl = new loginController();
router.post('/', requiredFields(["username","password"]), loginctrl.run);

export default router;