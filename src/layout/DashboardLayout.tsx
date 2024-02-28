import { Outlet } from "react-router-dom";
import MySidebar from "./MySidebar";
import DashboardNav from "@/components/ui/shared/DashboardNav";
import { useAppSelector } from "@/redux/hooks";
import { cn } from "@/lib/utils";
// import { useState } from "react";

const DashboardLayout = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <div className="flex relative">
      <div>
        <MySidebar />
      </div>
      <div
        className={cn("grow w-full min-h-screen h-full lg:ml-[300px]", {
          "bg-slate-900": isDark,
        })}
      >
        <DashboardNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
