import jwt from "jsonwebtoken";
import ErrorHandler from "../Utils/errorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
import User from "../Models/Users/User.js";

export const authenticated = catchAsyncError(async(req,res,next)=>{
    
    const {token} = req.cookies;

    if(!token)
        return next(new ErrorHandler("Not logged in", 401))

     const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)

     req.user = await User.findById(decode._id);
     next();
})
