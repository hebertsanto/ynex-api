import mongoose from "mongoose";
import { Schema } from 'mongoose'


const userModel = new Schema({
   name: {
     type: 'string',
     required: true
   },
   email:{
    type: 'string',
    required: true,
   },
   cep:{
    type:'string',
    required: true
   },
   address:{
    type: 'string',
    required: true
   },
   phoneNumber:{
    type: 'string',
    required: true
   }
})


export default  mongoose.model('User', userModel)