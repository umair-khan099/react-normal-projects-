import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const Layout = () => {
  return (
    <div className="bg-[#fffffc] w-full min-h-screen px-10 py-5">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
