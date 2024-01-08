import express from 'express';
const router = express.Router();

import createUserController from '../controllers/User/createUserController.js';

const createUserctrl = new createUserController();
router.post('/user', createUserctrl.run);



export default router;