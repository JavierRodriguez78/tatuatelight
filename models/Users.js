import mongoose, {Schema} from 'mongoose';



const UserSchema = new Schema(
   {
     username:{
        type: String,
        required: true
     },
     password:{
        type: String,
        required: true
     }
   } 
)
const Users = mongoose.model('Users', UserSchema);
export default Users;