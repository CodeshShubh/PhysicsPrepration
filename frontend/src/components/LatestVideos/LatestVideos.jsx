import React, { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import Pagination from "./CourseComponents/Pagination";
import CardContainer from "./CourseComponents/CardContainer";
import Aside from "./CourseComponents/Aside";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestVideos } from "../../../redux/actions/videoAction";

const LatestVideos = () => {
  const inputRef = useRef();
  const [page, setpage] = useState(1);
  const [searchVideos, setSearchVideos] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { videos, totalPage, currentPage } = useSelector(
    (state) => state.videos
  );

  console.log(videos);

  const dispatch = useDispatch();

  useEffect(() => {
    const filtered = videos.filter(
      (items) =>
        items.category.toLowerCase().includes(searchInput.toLowerCase()) ||
        items.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        items.description.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchVideos(filtered);
  }, [searchInput]);

  useEffect(() => {
    dispatch(fetchLatestVideos({ page }));
  }, [dispatch, page]);


  useEffect(()=>{
    setSearchVideos(videos);
  },[videos])



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
    <section className="flex justify-evenly mt-10 ">
      {/* main */}
      <main className="w-[60%]">
        <div className="flex justify-between">
          <h1 className="font-extrabold  lg:text-3xl">All Topics</h1>
          <div className="border rounded-2xl flex justify-center items-center">
            <input
              type="text"
              ref={inputRef}
              value={searchInput}
              placeholder="Search"
              className="outline-none p-[-1] lg:p-1"
              onChange={(e) => setSearchInput(e.target.value)}
            />{" "}
            <LuSearch
              onClick={() => inputRef.current.focus()}
              className="inline size-5 mr-1 cursor-pointer"
            />
          </div>
        </div>

        {/* cardContainer */}
        <CardContainer className="" videos={searchVideos} />

        {/* pagination */}
        <Pagination
          setpage={setpage}
          totalPage={totalPage}
          currentPage={currentPage}
        />
      </main>

      {/* aside */}
      <aside className=" hidden lg:block shadow-xl w-[15%] p-5 h-fit rounded bg-orange-50">
        <Aside />
      </aside>
    </section>
  );
};

export default LatestVideos;
