import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const userSchema = new mongoose.Schema({
     email:{
        type:String,
        required:[true, 'Please enter your email'],
        unique:true,
        lowercase:true,
        validate:{
            validator: validator.isEmail,
            message: 'Please Enter valid Formate'
        }
     },
     userName:{
        type:String,
        required:[true, 'Please enter your user name'],
        lowercase:true,
        minlength:[3, 'Username must be at leaset 3 characters long']
     },
     password:{
        type:String,
        required:[true, 'please enter your password'],
        select:false,
        validate:{
            validator:(value)=>
                validator.isStrongPassword(value, {
                    minLength:8,
                    minLowercase:1,
                    minUppercase:1,
                    minNumbers:1,
                    minSymbols:1
                }),
                message:'Password must be at least 8 characters long, including an uppercase letter , an lowercase letter , a number , and a symbol.'
            },
        },

     role:{
        type:String,
        enum:['Admin', 'User'],
        default:'User'
     },
     avatar:{
          public_id:{
            type:String,
            // required:true,
          },
          url:{
            type:String,
            // required:true,
          }
     },
     resetPasswordToken:String,
     resetPasswordExpire:String,

},{timestamps:true})

// hashing password using bcrypt
 userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next();
      this.password = await bcrypt.hash(this.password, 10);
      next()
 })

 userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)
 }


// we generate token 
userSchema.methods.getJwtToken = function () {
     const options = {
         expiresIn: '15d',

     }
       const token = jwt.sign({_id:this._id} , process.env.JWT_SECRET_KEY , options)
       return token
}

userSchema.methods.getResetToken = function(){
    const resetToken = crypto.randomBytes(20).toString('hex');

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.resetPasswordExpire = Date.now()+15*60*60;
    return resetToken;
}

const User = mongoose.model('User', userSchema);

export default User;