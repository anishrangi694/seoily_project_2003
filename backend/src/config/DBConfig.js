import mongoose from 'mongoose';
import { MONGO_URL } from './server.js';

async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("mongodb is successfully connected")
    }catch(error){
        console.log('mongodb not connected',error);
    }
}

export default connectDB;