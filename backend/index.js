import express from 'express';
import dotenv from 'dotenv'
import { dbConnection } from './Utils/dbConnection.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import cloudinary from 'cloudinary'


//app initilization
const app = express();
dotenv.config()


// configuration of cloudinary

cloudinary.config({ 
     cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
     api_key:process.env.CLOUDINARY_API_KEY, 
     api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
 });


// mendetary middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
     origin:process.env.FRONTEND_URL,
     credentials:true,
     methods:["GET","POST", "PUT", "DELETE"]

}))
 
// dot env file config

const PORT = process.env.PORT 

// database Connection
dbConnection();


import  courseRoutes from './Routes/Courses/CouresesRoutes.js';
import userRoutes from './Routes/User/UserRoutes.js';
import  errorMiddleWare  from './MiddleWares/ErrorMiddleWare.js';

// courses routes 
app.use('/courses', courseRoutes);
app.use('/user', userRoutes);


app.get('/', (req, res) => {
     res.send(`server is working go to frontend url : <a href="${process.env.FRONTEND_URL}" target="_blank">Click here</a>`);
 });
 

app.use(errorMiddleWare)

app.listen(PORT, ()=>{
     console.log(`Server is running on: localhost:${PORT}`)
})