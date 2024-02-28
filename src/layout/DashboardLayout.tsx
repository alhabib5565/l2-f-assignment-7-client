import { Outlet } from "react-router-dom";
import MySidebar from "./MySidebar";
// import { useState } from "react";

const DashboardLayout = () => {
  return (
    <div className="flex relative">
      <div>
        <MySidebar />
      </div>
      <div className="grow w-full min-h-screen h-full lg:ml-[300px] p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
