import mongoose from "mongoose";
import Citas from "../models/Appointments.js";

export default class AppointmentsRepository {
    constructor(){
        this.Citas = Citas;
    }
 
    async createAppointment(date, time, pircing, tatuaje){
        console.log("Recibido en el repositorio", date, time, pircing, tatuaje);
        return await this.Citas.create({date: date, time:time, pircing:pircing, tatuaje:tatuaje});
    }

 
}