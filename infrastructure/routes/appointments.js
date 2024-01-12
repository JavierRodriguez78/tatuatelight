import express from 'express';
import createAppointmentController from '../controllers/Appointments/createAppointmentController.js';
import getAppointmentsController from '../controllers/Appointments/getAppointmentsController.js';
import getAppointmentsByUserController from '../controllers/Appointments/getAppointmentsByUserController.js';
import requiredFields from '../middeware/requiredFields.js';
import auth from '../middeware/auth.js';
import roles from '../middeware/roles.js';

const router = express.Router();
const appointmentCtr = new createAppointmentController();
router.post('/', [auth, requiredFields(["date", "time","pircing", "tatuaje" ]),roles('customer')], appointmentCtr.run)
const getAppointmentsCtr = new getAppointmentsController();
router.get('/', [auth, roles('user')], getAppointmentsCtr.run);
const getAppointByUserCtr  =  new getAppointmentsByUserController();
router.get('/user', [auth, roles('customer')], getAppointByUserCtr.run);



export default router;