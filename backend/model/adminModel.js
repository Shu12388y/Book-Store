import mongoose, { Schema } from "mongoose";

const adminSchema = Schema({
    name:{
        type:string,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
})




export const adminModel =  mongoose.models.admins ||  mongoose.model("Admin",adminSchema);