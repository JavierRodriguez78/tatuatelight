import  express  from 'express';
import  tatuaje from './routes/tatuatelight.js';
import  user from './routes/users.js';

const router = express.Router();

router.get('/hola', tatuaje);
router.get('/users',user);
export default router;

