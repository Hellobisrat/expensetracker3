import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const db = ()=>{
  try{
    mongoose.connect(process.env.MONGO_URL)
    console.log('db connected')
  } catch(error){
    console.log('error occur during connection',error)
    process.exit(1);
  }

}

export default db;