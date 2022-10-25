import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar px-10 bg-black">
      <div className="flex-1 items-center">
        <img className="h-16" src="/assets/logo.jpg" alt="" />
        <Link className="text-xl text-white ml-3 font-bold" to="/">
          <span className="text-red-600">L</span>EARN
          <span className="text-red-600">W</span>ITH
          <span className="text-red-600">G</span>OAL
        </Link>
      </div>

      <div className="text-xl font-semibold  text-white">
        <Link className="mr-4 hover:text-red-600 duration-300" to="/">
          Courses
        </Link>
        <Link className="mr-4 hover:text-red-600 duration-300" to="/blog">
          Blog
        </Link>
        <Link className="mr-4 hover:text-red-600 duration-300" to="/FAQ">
          FAQ
        </Link>
        <Link className="mr-4 hover:text-red-600 duration-300" to="/login">
          Login
        </Link>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text text-white mx-2">Theme</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
