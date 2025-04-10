import { MdDateRange } from "react-icons/md";


const CardContainer = ({videos}) => {
  

  return (
    <div className='mt-5 lg:mt-15 p-1 lg:p-0 flex flex-col gap-5'> 

            {/* cards */}
             {
               videos.map((data , index)=>{
                 return(
            <div key={index} className='flex gap-2 lg:justify-between items-center border rounded-l-2xl shadow transition transform duration-300 hover:scale-104 cursor-pointer group '>
            <iframe
          className="p-1  rounded-2xl w-[150px] h-[100px] lg:w-[250px] lg:h-[150px]"
            src={data.videoUrl}
            title="YouTube video player"
            frameBorder="5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
            <div className='w-[70%] space-y-1 '>
              <h1 className=' lg:font-extrabold lg:text-xl leading-none lg:leading-normal group-hover:text-orange-400'>{data.title}</h1>
              <p className='flex items-center gap-1 font-light text-[14px] leading-none lg:leading-normal'> <MdDateRange className='text-orange-400 size-4' /> jan 24, 2023</p>
              <p className='tracking-tight font-light leading-none lg:leading-normal'>{data.description}</p>
            </div>
            </div>
                 )
               })
             }
            
    </div>
  )
}

export default CardContainer