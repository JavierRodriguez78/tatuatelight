import createAppointmentService from "../../../application/services/Appointments/createAppointmentService.js";
export default class createAppointmentController{
  constructor(){}

  async run(req, res, next){

    try{
        const { date, time, pircing, tatuaje } = req.body;
        let createAppointmentSrv = new createAppointmentService(next);
        let Appointment= await createAppointmentSrv.createAppointment(date, time, pircing, tatuaje, req.id);
        if(Appointment != undefined) res.status(201).send("Appointment created");
            }catch(error){
              next(error);
            }
          }
} 