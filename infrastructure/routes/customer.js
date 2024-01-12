
import express from 'express';
import auth from '../../middeware/auth.js';
const router = express.Router();

import createCustomerController from '../controllers/Customer/createCustomerController.js';

const createCustomerctrl = new createCustomerController();
router.post('/', createCustomerctrl.run);
//router.get('/', auth, getCustomerctrl.run);

export default router;