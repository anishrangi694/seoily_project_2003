import mongoose from "mongoose";
import axios from 'axios'

const userScehma= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


const User= new mongoose.model('User',userScehma);

export default User;