import  express  from 'express';
import  tatuaje from './routes/tatuatelight.js';
//import  users from './routes/users.js';
import login from './routes/auth.js';
const router = express.Router();

router.use('/hola', tatuaje);
router.use('/login', login);
//router.get('/users',users);
export default router;

