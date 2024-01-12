import express from 'express';
import auth from '../middeware/auth.js';
import getUsersController from '../controllers/User/getUsersController.js';
import createUserController from '../controllers/User/createUserController.js';
import requiredFields from '../middeware/requiredFields.js';

const router = express.Router();
const createUserctrl = new createUserController();
router.post('/',requiredFields(["username","password"]), createUserctrl.run);


const getUsersctrl = new getUsersController();
router.get('/',auth, getUsersctrl.run);


export default router;