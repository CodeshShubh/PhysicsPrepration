import React from "react";
import logo from '../../assets/logo.png'
import youtube from '../../assets/Social/youtube.png'
import instagram from '../../assets/Social/instagram.png'
import facebook from '../../assets/Social/facebook.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-800 text-white">
      {/* logoText */}
     <div className="flex flex-col gap-5 lg:flex-row justify-evenly  p-5 text-center">
     <div className="p-2 w-fit lg:mx-0 mx-auto ">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo"  className="w-[50px] h-[50px] rounded-full"/>
          <p className="font-extrabold">Physics Preparation</p>
        </div>
        <p className="w-56 text-[12px] text-gray-400 text-center mt-3">Master 12th Physics for JEE & NEET with interactive lessons, problem-solving strategies, and real-world applications.</p>
      </div>

      {/* gethelp */}
      <div className=" [&>a]:text-gray-400 [&>h1]:mb-3 [&>h1]:text-lg [&>a]:text-sm [&>a]:flex [&>a]:flex-col  ">
         <h1>GET HELP</h1>
         <Link to={'/contactUs'}>Contact Us</Link>
         <Link to={'/latestVideos'}>Latest Videos</Link>
         <Link to={'/AllCourse'}>Courses </Link>
         <Link to={'/faq'}>FAQ</Link>
      </div>

      {/* programs */}
      <div className=" [&>a]:text-gray-400 [&>h1]:mb-3 [&>h1]:text-lg [&>a]:text-sm [&>a]:flex [&>a]:flex-col">
        <h1>PROGRAMS</h1>
        <Link>NEET Preparation 2025</Link>
        <Link>12th Physics</Link>
        <Link>Topics</Link>
        <Link>Advance Physics</Link>
      </div>

      {/* contactus */}
      <div className=" [&>p]:text-gray-400 [&>h1]:mb-3 [&>h1]:text-lg [&>p]:text-sm ">
        <h1>CONTACT US</h1>
        <p className="w-[60%] text-center mx-auto mb-1"><span className="">Address:</span> Gangoh town, Saharanpur , Uttar Pradesh, India</p> 
        <p>Tel: + (123) 7060821855 <br></br>
        Mail: physicsPrepration@gmail.com</p>
        {/* social */}
        <div className=" flex justify-center gap-5 mx-auto w-1/2 mt-2 [&>a>img]:transition-transform [&>a>img]:duration-300 [&>a>img]:w-[30px] [&>a>img]:h-[30px] lg:[&>a>img]:w-[50px] lg:[&>a>img]:h-[50px]  [&>a>img]:cursor-pointer    [&>a>img]:hover:scale-105 ">
            <a href="https://www.youtube.com/@physicsprepration" target="_blank"><img src={youtube} alt="youtube"/></a>
            <a href="https://www.instagram.com/physicspreparation" target="_blank"><img src={instagram} alt="instagram"/></a>
            <a href="https://www.facebook.com/people/Preeti-Saini/100068030618356/" target="_blank"><img src={facebook} alt="facebook"/></a>
        </div>
      </div>
     </div>
      <hr className="w-[50%] mx-auto m-2 text-gray-400"/>
      <p className="text-center text-sm p-1 lg:text-lg text-gray-400">Copyright © 2025 | Physics Preparation | Developed by Shubhanshu</p>
    </footer>
  );
};

export default Footer;
