import mongoose, {Schema} from 'mongoose';

const CitasSchema = new Schema(
   {
        date:{
            type: String,
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
const Citas = mongoose.model('Citas', CitasSchema);
export default Citas;