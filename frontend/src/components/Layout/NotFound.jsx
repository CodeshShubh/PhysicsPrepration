import React from 'react'
import Error from '../../assets/Error.png'

const NotFound = () => {
  return (
    <div className=' w-full h-[65vh] p-1 lg:h-[85vh] lg:p-5  text-center'>
      <h1 className='font-extrabold text-4xl mt-5'>Error 404</h1>
      <img src={Error} alt='Error...' className='h-[500px] w-[400px] lg:size-[80%] mx-auto '/>
    </div>
  )
}

export default NotFound