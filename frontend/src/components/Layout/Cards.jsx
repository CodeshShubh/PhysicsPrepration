import React from 'react'


const Cards = ({items}) => {
  return (
    <div className='group mx-auto lg:mx-0 shadow w-[300px] h-[200px] lg:w-[200px] lg:h-[130px] bg-orange-50 rounded-2xl flex flex-col justify-center items-center gap-1 p-1 cursor-pointer transition transform duration-300 hover:scale-103   z-0 '>
    <h1>{items.icon}</h1>
    <h3 className='font-extrabold group-hover:text-orange-400'>{items.title}</h3>
    <p className='font-extralight tracking-tight text-[12px] text-center'>{items.description}</p>
    </div>
  )
}

export default Cards;