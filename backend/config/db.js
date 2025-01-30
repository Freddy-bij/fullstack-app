import mongoose from "mongoose";


export const connnectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected:${conn.connection.host}`)
    }catch(error){
        console.error(`error:${error.message}`)
    }
}