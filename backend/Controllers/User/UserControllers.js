import { catchAsyncError } from '../../MiddleWares/catchAsyncError.js'
import ErrorHandler from '../../Utils/errorHandler.js';
import User from '../../Models/Users/User.js';
import {sendToken} from '../../Utils/sendToken.js'
import { sendEmail } from '../../Utils/sendEmail.js';
import crypto from 'crypto';
import  { v2 as cloudinary} from 'cloudinary';
import getDataUri from '../../Utils/dataUri.js';
export const Register = catchAsyncError(async(req, res, next)=>{

   const  {email , userName, password} = req.body;

    if(!email || !userName || !password )
        return next( new ErrorHandler("Please Enter all fields" , 400))

     const user = await User.create({
        email , 
        userName, 
        password
     })

     sendToken(user, res , 201, "Register Succesfully" ) 
     
    
});


export const Login = catchAsyncError(async(req, res, next)=>{

    const {email , password } = req.body;

      if(!email  || !password)
         return next(new ErrorHandler("Email or password is incorrect" , 400))

    const user =  await User.findOne({email}).select("+password");
    if(!user)
        return next(new ErrorHandler('This email not Register', 401))
    
     const isMatch = await user.comparePassword(password)

     if(!isMatch)
         return next(new ErrorHandler('Incorrect Email or Password', 401))
     
      sendToken(user, res , 200 , `welcome back ${user.userName}`  )
})


export const Logout = catchAsyncError( async(req,res,next)=>{
    
    res.status(200).cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly:true,
        secure:true,
        sameSite:'none',
    }).json({
        status:true,
        message:"Logout Succesfully"
    })
})


export const getMyProfile  = catchAsyncError(async(req,res,next)=>{
      const id =  req.user._id

      const user = await User.findById(id);

      res.status(200).json({
        status:true,
        message:"user Fetched",
        user,
      })
})

export const changePassword = catchAsyncError(async(req,res,next)=>{
 
    const {oldPassword , newPassword} = req.body;

    if(!oldPassword || !newPassword)
        return next( new ErrorHandler("Plesase Enter all fields", 400))

    const id = req.user._id;

    const user=  await User.findById(id).select("+password");

    const isMatch = await  user.comparePassword(oldPassword);

    if(!isMatch)
        return next(new ErrorHandler("oldPassword not matched", 400))

     user.password = newPassword;

     await user.save();

     res.status(200).json({
        success:true,
        message: "Password updated succesfully"
     })
        
})

// remaining profile photo to upload
export const updatedProfile = catchAsyncError(async(req,res,next)=>{
     const {userName, email} = req.body;


     // file receive form using multer single upload function
     const file = req.file;

     // this id we receive from the after decode the jwt and set it in req.user
      const id = req.user._id;
      const user = await User.findById(id)

      // no need to add custom error becouse only acces by logged in user

     if(email) user.email = email;
     if(userName) user.userName = userName;


     if(file) {
        const fileUri = getDataUri(file);
        const cloudinaryResponse = await cloudinary.uploader.upload(fileUri.content, {
            folder:"avatars",
        });

        if( user.avatar && user.avatar.pulic_id){
            await cloudinary.uploader.destroy(user.avatar.pulic_id)
        }

        user.avatar = {
            public_id: cloudinaryResponse.public_id,
            url:cloudinaryResponse.secure_url,
        }

     }


     await user.save();

     res.status(200).json({
        success:true,
        message: "Profile update succesfully",
        user,
     })
})


// resetPassword


export const forgetPaasword = catchAsyncError(async(req,res,next)=>{
         const {email} = req.body;

         const user = await User.findOne({email});

         if(!user)
            return next( new ErrorHandler("Email not Register" , 400));

         const resetToken = await user.getResetToken() // after this gettig token we send this token to the mail

    await user.save();

    // for now we frontend url but for testing we use bakend url in postman
    const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}` // because user click on this like so we make a full like so when it hit so it goes new page and take onlly password

    const message = `Click link to reset your Password ${url}. If you have not request so please ignore `

   await sendEmail(user.email , "Physics Prepration Reset Password", message)

   res.status(200).json({
    success:true,
    message:`Reset Password Link send on ${user.email} `
   })
})


export const resetPassword = catchAsyncError(async(req,res,next)=>{

    const {token} = req.params;

       const resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex')

       const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gt:Date.now(),
        }
       })

       if(!user)
        return next(new ErrorHandler("Token is invalid or has been expire", 401))

        const {password} = req.body;

        if(!password)
            return next(new ErrorHandler("Plesese enter Password" , 400))

        user.password = password;

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({
            success:true,
            message:"password changed succesfully",
        })
})
