import React from 'react';
import { FaCircleChevronLeft , FaCircleChevronRight } from "react-icons/fa6";



const Pagination = ({setpage, totalPage, currentPage}) => {
 const handlePrev = ()=>{
    if(currentPage>1){
      setpage(prev=>prev-1)

    } 
 }

 const handleNext = ()=>{
   if(currentPage<totalPage) {
    setpage(prev=>prev+1)

  }
    

 }

 const generatePagination = ()=>{
       const pages = [];
       const maxPageToShow = 5;
    if(totalPage<=maxPageToShow){
            for(let i=1 ; i<=totalPage; i++ ){
               pages.push(i)
            }
    }else{
       pages.push(1);

       if(currentPage>3) pages.push('....')
        const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPage - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);

    }
    if (currentPage < totalPage - 2) pages.push("..."); // Ellipsis after current page

      pages.push(totalPage); // Last Page
  }
   return pages
 }
  return (
    <div className='mt-8 mb-5'>
               <div className='flex justify-center items-center gap-5 [&>p]:text-white [&>p]:size-5  [&>p]:text-center [&>p]:rounded-full [&>p]:overflow-hidden [&>p]:cursor-pointer'> 
               <FaCircleChevronLeft className='cursor-pointer size-5' onClick={handlePrev} />
                
                {
                  generatePagination().map((page, index) => {

                     return <p key={index} onClick={()=>typeof page === 'number' && setpage(page)}
                     className={`${Number(currentPage)===page ? 'bg-orange-400' : 'bg-black'}`} >{index+1}</p> 
                  })
                }
                .....
               <FaCircleChevronRight className='cursor-pointer size-5'  onClick={handleNext} />

               </div>
 </div>
  )
}

export default Pagination