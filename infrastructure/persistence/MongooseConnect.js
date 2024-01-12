import mongoose from 'mongoose';
import dotenv from 'dotenv/config';

const startConnection = async()=>{

    try{
    await mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?directConnection=true&authMechanism=DEFAULT&authSource=admin`);
    console.log("MongoDB Connected");
    }catch (err){
        console.error(err);
    }
}

export default startConnection;