import AppointmentsRepository from '../../../infrastructure/persistence/repository/AppointmentsRepository.js';
import UserRepository from '../../../infrastructure/persistence/repository/UsersRepository.js';

export default class getAppointmentByUserService {
  
    constructor(next){
        this.next = next;
        this.Appointmentrepository = new AppointmentsRepository();
        this.UserRepository = new UserRepository();
    }

    async getAppointment(id){
       try{
         let user = await this.UserRepository.getUserById(id);
         return this.Appointmentrepository.getAppointmentsByUserId(user);
       }catch(error){
        this.next(error);
       }
    }

}