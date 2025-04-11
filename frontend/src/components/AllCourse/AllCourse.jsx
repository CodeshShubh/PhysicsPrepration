import React, { useEffect, useMemo } from "react";
import {useDispatch, useSelector } from "react-redux";
import { fetchCouresVideos } from "../../../redux/actions/videoAction";

const LatestVideos = () => {
     const dispatch = useDispatch()
  const { videos } = useSelector((state) => state.videos);

  // console.log(videos)

  const filteredVideos = useMemo(()=>{
     const result = videos?.filter((items) => items.category === "course")
     return result
  },[videos])

  useEffect(()=>{
      dispatch(fetchCouresVideos())
  },[dispatch])
  
  if (!filteredVideos || filteredVideos.length === 0) {
    return (
      <div className="flex justify-center items-center h-[450px]">
        <h1 className="text-xl font-semibold text-gray-700 bg-orange-100 px-6 py-3 rounded shadow">
          🚫 No Videos Found
        </h1>
      </div>
    );
  }


  return (
    <div className="h-screen p-5">
      <h1 className="font-extrabold text-3xl bg-orange-200 text-center rounded">
        {filteredVideos[0]?.category}
      </h1>
      <h3 className="font-bold text-xl mt-5 bg-black text-white rounded-t-2xl text-center ">{filteredVideos[0]?.title}</h3>
      <div className="flex flex-wrap gap-5 border p-1">
        {filteredVideos.map((items) => (
          <div key={items._id} className=" rounded w-[350px] h-[200px] bg-orange-100 shadow overflow-hidden">
              <div>
              <iframe
              className="w-full"
              src={items.videoUrl}
              title="YouTube video player"
              frameBorder="5"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
              </div>
             <div className="text-center mt-2 h-fit tracking-tight line-clamp-1">
             <p className="font-light">{items.description}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestVideos;
