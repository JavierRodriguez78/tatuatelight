import mongoose from "mongoose";
import Citas from "../models/Appointments.js";

export default class AppointmentsRepository {
    constructor(){
        this.Citas = Citas;
    }
 
    async createAppointment(date, time, pircing, tatuaje, user){
        console.log("Recibido en el repositorio", date, time, pircing, tatuaje);
        return await this.Citas.create({date: date, time:time, pircing:pircing, tatuaje:tatuaje, user:user});
    }

    async getAppointment(){
        return await this.Citas.find({}).populate("user");
    }
 
    async getAppointmentsByUserId(user){
        return await this.Citas.find({user:user}).populate("user");
    }
}