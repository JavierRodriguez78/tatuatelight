import AppointmentsRepository from '../../../infrastructure/persistence/repository/AppointmentsRepository.js';
export default class createAppointmentService {
  
    constructor(next){
        this.next = next;
        this.repository = new AppointmentsRepository();
          }

    async createAppointment(date, time, pircing, tatuaje){
       try{
         return this.repository.createAppointment(date, time, pircing, tatuaje);
       }catch(error){
        this.next(error);
       }

    }

}