import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedVideo, FetcheditableVideos } from "../../../../redux/actions/videoAction";
import toast, {Toaster} from 'react-hot-toast'
import { clearError, clearMessage } from "../../../../redux/Slices/editVideoSlice";

const VideoList = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.videos);
  const {  message ,error } = useSelector((state) => state.edit);
  const [editVideos, setEditVideos] = useState([]);

  const categories = ["questions", "course", "doubts", "others"];

  // 🧠 Fetch videos once on mount
  useEffect(() => {
    dispatch(FetcheditableVideos());
  }, [dispatch ]);

  // ⏬ Update local state when Redux state updates
  useEffect(() => {
    setEditVideos(videos);
  }, [videos]);


  useEffect(()=>{
 if(error){
   toast.error(error)
dispatch(clearError())
 }
 if(message){
  toast.success(message)
  dispatch(clearMessage())
 }
  },[message , error])
  

  // 🧨 Handle delete with optimistic UI update
  const handleDelete = (id) => {
    setEditVideos((prev) => prev.filter((video) => video._id !== id));
    dispatch(deletedVideo(id)); // Call delete in backend
  };

  if (!videos || videos.length === 0) {
    return (
      <div className="flex justify-center items-center h-[450px]">
        <h1 className="text-xl font-semibold text-gray-700 bg-orange-100 px-6 py-3 rounded shadow">
          🚫 No Videos Found
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Toaster position="top-center" />
      {categories.map((category) => {
        const filteredVideos = editVideos.filter((video) => video.category === category);

        return (
          filteredVideos.length > 0 && (
            <div key={category} className="mb-6">
              <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredVideos.map((video) => (
                  <div key={video._id} className="p-4 border rounded shadow-md bg-white">
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      className="w-full h-40 rounded-md"
                      allowFullScreen
                    ></iframe>
                    <h3 className="text-lg font-semibold mt-2">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.description}</p>

                    <div className="flex justify-end mt-2">
                      <button
                        className="bg-red-500 text-white px-4 py-1 rounded cursor-pointer"
                        onClick={() => handleDelete(video._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default VideoList;
