
export  const sendToken = (user, res , statusCode=200, message)=>{
   const token = user.getJwtToken();

  const options = {
    expires: new Date(Date.now()+15*24*60*60*1000),
    secure:true,
    httpOnly:true,
    sameSite:"none",
  }

    res.status(statusCode).cookie('token' , token , options).json({
        succes:true,
        message:message,
        user,
    })

}