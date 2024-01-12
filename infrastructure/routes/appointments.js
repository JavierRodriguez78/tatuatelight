import express from 'express';
import auth from '../middeware/auth.js';
import roles from '../middeware/roles.js';

const router = express.Router();

export default router;