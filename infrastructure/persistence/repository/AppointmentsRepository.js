import mongoose from "mongoose";


export default class AppointmentsRepository {
    constructor(){
        this.Users = mongoose.model('Appointments');
    }
 
    async createAppointment(date, time, pircing, tatuaje){
        return await this.Users.create({date: date, time:time, pircing:pircing, tatuaje:tatuaje});
    }

 
}