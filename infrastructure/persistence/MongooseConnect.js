import mongoose from 'mongoose';

const startConnection = async()=>{

    try{
    await mongoose.connect('mongodb://root:example@localhost:27017/?directConnection=true&authMechanism=DEFAULT&authSource=admin');
    console.log("MongoDB Connected");
    }catch (err){
        console.error(err);
    }
}

export default startConnection;