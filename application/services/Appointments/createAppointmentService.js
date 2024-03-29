import AppointmentsRepository from '../../../infrastructure/persistence/repository/AppointmentsRepository.js';
import UserRepository from '../../../infrastructure/persistence/repository/UsersRepository.js';

export default class createAppointmentService {
  
    constructor(next){
        this.next = next;
        this.Appointmentrepository = new AppointmentsRepository();
        this.UserRepository = new UserRepository();
    }

    async createAppointment(date, time, pircing, tatuaje, id){
       try{
         let UserFind = await this.UserRepository.getUserById(id);
         return this.Appointmentrepository.createAppointment(date, time, pircing, tatuaje, UserFind);
       }catch(error){
        this.next(error);
       }

    }

}