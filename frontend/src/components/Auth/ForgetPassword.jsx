import React from 'react'

const ForgetPassword = () => {
  return (
    <div className="h-fit">
      <form>
        <div className="w-[40%] mx-auto m-[12%]  text-center space-y-5">
          <h1 className="font-extrabold text-2xl uppercase">forget Password</h1>
          <div className="flex flex-col justify-center gap-5 w-full">
            <input placeholder="abc@gmail.com " className="outline-none border p-1.5" />
            <button className="bg-blue-700 p-1 rounded">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword