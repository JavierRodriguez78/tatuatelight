import  express  from 'express';
import  tatuaje from './routes/tatuatelight.js';
import  users from './routes/users.js';
import login from './routes/auth.js';
import customer from './routes/customer.js';
const router = express.Router();

router.use('/hola', tatuaje);
router.use('/login', login);
router.use('/users',users);
router.use('/customer', customer);

export default router;

