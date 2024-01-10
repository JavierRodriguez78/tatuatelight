import express from 'express';
import auth from '../middeware/auth.js';
import getUsersController from '../controllers/User/getUsersController.js';

const router = express.Router();

import createUserController from '../controllers/User/createUserController.js';

const createUserctrl = new createUserController();
router.post('/', createUserctrl.run);


const getUsersctrl = new getUsersController();
router.get('/',auth, getUsersctrl.run);


export default router;