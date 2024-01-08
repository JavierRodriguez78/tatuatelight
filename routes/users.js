import express from 'express';
const router = express.Router();

import createUserController from '../controllers/User/createUserController.js';

const createUserctrl = new createUserController();
router.post('/', createUserctrl.run);

/*
const getUsersctrl = new getUsersController();
router.get('/users', getUsersctrl.run);*/


export default router;