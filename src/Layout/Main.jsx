import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Commons/Header/Header";

import SideNav from "../Commons/SideNav/SideNav";
const Main = () => {
  return (
    <div className="main">
      <Header></Header>
      <div className=" 2xl:w-[85%] p-4 2xl:p-0  mt-10 mx-auto gap-3 xl:gap-12 grid lg:grid-cols-[1fr,3fr] xl:grid-cols-[.7fr,3fr]">
        <SideNav></SideNav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
