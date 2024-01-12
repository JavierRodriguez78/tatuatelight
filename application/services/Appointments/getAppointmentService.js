import AppointmentsRepository from '../../../infrastructure/persistence/repository/AppointmentsRepository.js';
import UserRepository from '../../../infrastructure/persistence/repository/UsersRepository.js';

export default class createAppointmentService {
  
    constructor(next){
        this.next = next;
        this.Appointmentrepository = new AppointmentsRepository();
        this.UserRepository = new UserRepository();
    }

    async getAppointment(){
       try{
         return this.Appointmentrepository.getAppointment();
       }catch(error){
        this.next(error);
       }

    }

}