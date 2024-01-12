import getAppointmentsService from '../../../application/services/Appointments/getAppointmentService.js';

export default class getAppointmentsController{
  constructor(){}

  async run(req, res, next){

    try{

        let getAppointmentsSrv = new getAppointmentsService(next);  
        let appointments= await getAppointmentsSrv.getAppointment();
        res.status(200).send(appointments);
      }catch(error){
              next(error);
            }
          }
} 