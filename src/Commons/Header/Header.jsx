import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../ContextProvider";
import { ThemeContext } from "../../ThemeProvider";
import { FaBars, FaXbox } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  console.log(theme);
  return (
    <div className="navbar duration-300 px-10 bg-black">
      <div className="flex-1 items-center">
        <img className="h-16" src="/assets/logo.jpg" alt="" />
        <NavLink
          className="text-xl hidden sm:block text-white ml-3 font-bold"
          to="/"
        >
          <span className="text-red-600">L</span>EARN
          <span className="text-red-600">W</span>ITH
          <span className="text-red-600">G</span>OAL
        </NavLink>
      </div>

      <div
        className={`text-xl duration-300 md:static fixed font-semibold  text-white ${
          open ? "top-[80px] flex flex-wrap justify-end mr-4 z-10 gap-4  bg-black left-[0px] w-full" : "top-[-200px]"
        }`}
      >
        <NavLink
          className={`mr-4 hover:text-red-600 duration-300 ${({ isActive }) =>
            isActive ? "activeLink" : ""}`}
          to="/"
        >
          Courses
        </NavLink>
        <NavLink
          className={`mr-4 hover:text-red-600 duration-300 ${({ isActive }) =>
            isActive ? "text-red-500" : "text-nothing"}`}
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={`mr-4 hover:text-red-600 duration-300 ${({ isActive }) =>
            isActive ? "activeLink" : ""}`}
          to="/FAQ"
        >
          FAQ
        </NavLink>
        {user?.uid ? (
          <>
            <button onClick={logOut}>Log Out</button>
            <img
              title={user?.displayName ? user.displayName : "User"}
              className="h-14 mx-2 rounded-full"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://marketplace.canva.com/EAE6OJ2qP8U/1/0/1600w/canva-gamer-with-glasses-character-twitch-profile-picture-CVfgWIJGgRo.jpg"
              }
              alt=""
            />
          </>
        ) : (
          <NavLink className="mr-4 hover:text-red-600 duration-300" to="/login">
            Login
          </NavLink>
        )}
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              onClick={() => setTheme(!theme)}
              type="checkbox"
              className="toggle mr-2 bg-red-600"
            />
            <span className="label-text hidden lg:inline text-white mr-2">
              {theme ? "LIGHT" : "DARK"}
            </span>
          </label>
        </div>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="md:hidden text-xl text-white inline-block"
      >
        {open ? <HiOutlineX></HiOutlineX> : <FaBars></FaBars>}
      </div>
    </div>
  );
};

export default Header;
