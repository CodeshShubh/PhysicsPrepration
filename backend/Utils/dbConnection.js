import mongoose from "mongoose";

export const dbConnection = async ()=>{
  try {
        await mongoose.connect(process.env.URI);
        console.log('Database is Connected ✅');
    } catch (error) {
        return console.log('Error:', error);
    }
}