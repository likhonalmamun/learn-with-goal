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

      <div className=""></div>
    </div>
  );
};

export default Header;
