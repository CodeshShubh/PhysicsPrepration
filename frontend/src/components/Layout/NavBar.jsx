import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";

import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../../redux/actions/userActions";

const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth);

  const dispatch=useDispatch()

 useEffect(() => {
    dispatch(loadUser())
 }, [dispatch])
 
  return (
    <div className="w-full shadow bg-white sticky top-0 z-100">
      <nav className="w-[90%] mx-auto flex justify-between items-center gap-3  px-5 py-1">
        {/* logo */}
        <div>
          <img
            className="size-15 lg:size-20 cursor-pointer transform duration-300 hover:scale-110"
            src={logo}
            alt="logo"
          />
        </div>

        <h1 className="lg:hidden text-orange-400 font-bold text-3xl   w-full text-center">
          Physics Prepration
        </h1>

        {/* navlinks */}
        <div className="lg:block hidden">
          <ul className="lg:flex lg:gap-15 gap-5 tracking-wide [&>*]:hover:text-orange-400">
            <li>
              <Link
                to={"/"}
                className="hover:border-b-3 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/latestVideos"}
                className="hover:border-b-3 transition duration-300"
              >
                Latest Videos
              </Link>
            </li>
            <li>
              <Link
                to={"/AllCourse"}
                className="hover:border-b-3 transition duration-300"
              >
                All Course
              </Link>
            </li>
            <li>
              <Link
                to={"/contactUs"}
                className="hover:border-b-3 transition duration-300"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to={"/faq"}
                className="hover:border-b-3 transition duration-300"
              >
                FAQ's
              </Link>
            </li>
          </ul>
        </div>

        <div className="absolute top-25 right-1.5">
          {isOpen ? (
            <SideBar setisOpen={setisOpen} isOpen={isOpen} user={user} />
          ) : (
            ""
          )}
        </div>
        <button
          className="lg:hidden cursor-pointer "
          onClick={() => setisOpen((prev) => !prev)}
        >
          <TfiMenu className="size-6" />
        </button>

        {/* registerBtns */}
        {!isAuthenticated ? (
          <div className="lg:flex gap-3 hidden   [&>*]:transform [&>*]:duration-300 [&>*]:hover:scale-110 [&>*]:hover:text-orange-400   ">
            <Link
              to={"/login"}
              className="px-6 py-2 rounded hover:bg-blue-700 bg-blue-800  "
            >
              Log in
            </Link>
            <Link
              to={"/register"}
              className="px-8 py-2 rounded hover:bg-blue-700 bg-blue-800"
            >
              Register
            </Link>
          </div>
        ) : loading ? (
          <div className="hidden lg:block">
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        ) : (
          <Link
            to={"/profile"}
            className=" hidden lg:block lg:flex lg:gap-5 lg:justify-center lg:items-center cursor-pointer"
          >
            <div className="w-[40px] h-[40px] shadow rounded-full overflow-hidden mx-auto">
              <img
                src={user?.avatar?.url || "https://placehold.co/80x80"}
                alt="photo"
                className="object-cover"
              />
            </div>
            {user.role === "Admin" ? (
              <h3>{`${user?.userName}(Admin)`}</h3>
            ) : (
              <h3>{user?.userName}</h3>
            )}
          </Link>
        )}

      </nav>
    </div>
  );
};

export default NavBar;
