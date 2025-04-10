import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const physicsLectures = [
  {
    icon: "⚡",
    title: "Electricity",
    description: "Study of electric charge, current, and circuits."
  },
  {
    icon: "🌍",
    title: "Gravity",
    description: "Understanding gravitational forces and free fall."
  },
  {
    icon: "🔬",
    title: "Quantum",
    description: "Exploring particles, waves, and quantum mechanics."
  },
  {
    icon: "🌀",
    title: "Magnetism",
    description: "Effects of magnetic fields and electromagnets."
  },
  {
    icon: "🎯",
    title: "Motion",
    description: "Laws of motion, velocity, and acceleration."
  },
  {
    icon: "💡",
    title: "Optics",
    description: "Study of light, reflection, and refraction."
  },
  {
    icon: "🌡️",
    title: "Thermodynamics",
    description: "Laws of heat, energy, and entropy."
  },
  {
    icon: "🔊",
    title: "Waves",
    description: "Types of waves and their behaviors."
  },
  {
    icon: "🕰️",
    title: "Relativity",
    description: "Time dilation and space-time concepts."
  },
  {
    icon: "⚛️",
    title: "Nuclear Physics",
    description: "Study of atomic nuclei and radioactivity."
  }
];



const CardsContainer = () => {
  return (
    <div className="">
      <div className=" p-5 flex justify-between items-center mb-5 -z-50">
        {/* left */}
            <div>
            <h3 className="font-extrabold text-2xl">Top Categories </h3>
            <p className="font-extralight tracking-tighter text-[11px]">Explore our Popular Categories</p>
            </div>

            {/* btn */}
            <div className="bg-orange-500 px-3 py-2 rounded-3xl cursor-pointer hover:bg-orange-400  transition transform duration-300 hover:scale-105">
            <Link to={'/allCourse'}>All categories</Link>
            </div>
      </div>


      {/* // cards cointainer */}
      <div className=" p-5 mt-5 flex flex-wrap gap-10 lg:gap-23 lg:justify-items-start items-center ">
         
         {
          physicsLectures.map((items , index)=>{
            return <Cards key={index} items={items}/>
          })
         }
      </div>
    </div>
  );
};

export default CardsContainer;
