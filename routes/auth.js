import express from 'express';
const router = express.Router();

import loginController from '../controllers/Auth/loginController.js';

const loginctrl = new loginController();
router.post('/', loginctrl.run);

export default router;