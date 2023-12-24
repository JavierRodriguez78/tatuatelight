import  express  from 'express';
import  tatuaje from './routes/tatuatelight.js';
const router = express.Router();

router.get('/hola', tatuaje);
export default router;

