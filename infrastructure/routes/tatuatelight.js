import express from 'express';
const router = express.Router();

import Healtcheck from '../controllers/healthcheck.js';

const ctrl = new Healtcheck();
router.get('/hola', ctrl.run);
export default router;