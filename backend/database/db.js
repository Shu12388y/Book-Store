import dotenv from "dotenv"
dotenv.config({
    path: ".env"
})

import mongoose from "mongoose";


export async function dbconnect(){
    await mongoose.connect(process.env.MONGO_URI)  
    console.log("db connected")    

}

