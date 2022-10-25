import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Commons/Header/Header";

import SideNav from "../Commons/SideNav/SideNav";
const Main = () => {
  return (
    <>
      <Header></Header>
    <div className="w-[90%] mx-auto grid grid-cols-[1fr,3fr]">
      <SideNav></SideNav>
      <Outlet></Outlet>
    </div>
    </>
  );
};

export default Main;
