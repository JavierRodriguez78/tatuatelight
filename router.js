import  express  from 'express';
import  tatuaje from './infrastructure/routes/tatuatelight.js';
import  users from './infrastructure/routes/users.js';
import login from './infrastructure/routes/auth.js';
import customer from './infrastructure/routes/customer.js';
const router = express.Router();

router.use('/hola', tatuaje);
router.use('/login', login);
router.use('/users',users);
router.use('/customer', customer);

export default router;

