import getAppointmentByUserService from '../../../application/services/Appointments/getAppointmentByUserService.js';

export default class getAppointmentsController{
  constructor(){}

  async run(req, res, next){

    try{

        let getAppointmentsSrv = new getAppointmentByUserService(next);  
        let appointments= await getAppointmentsSrv.getAppointment(req.id);
        res.status(200).send(appointments);
      }catch(error){
              next(error);
            }
          }
} 