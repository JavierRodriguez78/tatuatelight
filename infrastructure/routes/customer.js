
import express from 'express';
import requiredFields from '../middeware/requiredFields.js';
const router = express.Router();

import createCustomerController from '../controllers/Customer/createCustomerController.js';

const createCustomerctrl = new createCustomerController();
router.post('/', requiredFields(["username","password"]), createCustomerctrl.run);
export default router;