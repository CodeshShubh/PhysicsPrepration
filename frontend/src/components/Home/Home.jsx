import React from "react";
import img from "../../assets/Header/girl2.png";
import { Link } from "react-router-dom";
import CardsContainer from "../Layout/CardsContainer";

const Home = () => {
  return (
    <div className="">
    <section className="  h-full">
      {/* banner */}
      <div className="h-[60%] shadow flex flex-col lg:flex-row justify-between items-center text-center gap-10 bg-orange-50">
        {/* image */}
        <div className="ml-1 lg:ml-5  ">
          <img src={img} alt="girl2" />
        </div>
        {/* text and button */}
        <div className="  w-[80%] lg:w-[60%] mx-auto flex flex-col gap-5 tracking-wide justify-center lg:font-bold  text-center  ">
          <h1 className=" w-full text-5xl lg:text-7xl text-center">
            Master <span className="text-blue-600">Physics </span>
            with <span className="text-orange-400">Clarity</span> and{" "}
            <span className="text-orange-400">Confidence.</span>
          </h1>
          <div className="w-[70%] mx-auto  font-light">
            <p>
              Master physics effortlessly with interactive lessons, real-world
              applications, and engaging experiments—learn anytime, anywhere, at
              your own pace.
            </p>
          </div>
          <div className="text-center mx-auto mb-2">
            <Link to={'/allCourse'} className=" inline-block bg-blue-800 px-10 py-3 hover:scale-103 hover:bg-blue-700  hover:text-orange-300 text-xl font-medium rounded cursor-pointer transition transform duration-300 ease-in-out">
              Explore
            </Link>
          </div>
        </div>
      </div>


      {/* video and text */}
      <div className=" shadow flex flex-col lg:flex-row justify-between items-center  h-[50%] p-5">

         {/* text */}
        <div className="  w-1/2 flex flex-col justify-center gap-2  text-center"> 
            <h1 className="font-bold text-xl lg:text-3xl  w-full">NEET Physics Roadmap Guide</h1>
          
           <p className="font-extralight tracking-tight lg:font-light">A structured roadmap covering key physics concepts, 
            problem-solving strategies, and exam-focused preparation tips.</p>

        </div>

         {/* video */}
        <div className="  ">
          <iframe
          className="p-1  rounded-2xl w-[300px] h-[200px] lg:w-[560px] lg:h-[315px]"
            src="https://www.youtube.com/embed/5nPIpNxlTaE?si=Bkmx3A4EingsOkFw"
            title="YouTube video player"
            frameBorder="5"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>


    {/* card section */}

    <section className=" shadow mt-2">
      <CardsContainer/>
    </section>
    </div>

  );
};

export default Home;
