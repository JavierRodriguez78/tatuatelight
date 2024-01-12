import mongoose, {Schema} from 'mongoose';



const AppointmentsSchema = new Schema(
   {
        date:{
            type: Date,
            required: true
        },
        time:{
            type: String,
            required: true
        },
        pircing:{
            type: Boolean,
            required: true
        },
        tatuaje:{
            type: Boolean,
            required: true
        }
   } 
)
const Appointments = mongoose.model('Appointments', AppointmentsSchema);
export default Appointments;