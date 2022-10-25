import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Commons/Header/Header";

import SideNav from "../Commons/SideNav/SideNav";
const Main = () => {
  return (
    <>
      <Header></Header>
    <div className="w-[80%] mt-10 mx-auto gap-7 grid grid-cols-[.7fr,3fr]">
      <SideNav></SideNav>
      <Outlet></Outlet>
    </div>
    </>
  );
};

export default Main;
