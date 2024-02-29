import Dashboard from "@/dashboard/dashboardHome/Dashboard";
import LeaderBoard from "@/dashboard/leaderBoard/LeaderBoard";
import CreateSupply from "@/dashboard/supply/CreateSupply";
import SupplyTable from "@/dashboard/supply/SupplyTable";
import DashboardLayout from "@/layout/DashboardLayout";
import MainLayout from "@/layout/MainLayout";
import Login from "@/pages/authentication/Login";
import Register from "@/pages/authentication/Register";
import Home from "@/pages/home/Home";
import AllReliefGoods from "@/pages/reliefGoods/AllReliefGoods";
import ReliefGoodsDetails from "@/pages/reliefGoods/ReliefGoodsDetails";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "relief-goods",
        element: <AllReliefGoods />,
      },
      {
        path: "relief-goods/:id",
        element: <ReliefGoodsDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/dashboard/home"} />,
      },
      {
        path: "home",
        element: <Dashboard />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
      {
        path: "supllies",
        element: <SupplyTable />,
      },
      {
        //top providers and leaderBoard are same
        path: "top-providers/leader-board",
        element: <LeaderBoard />,
      },
    ],
  },
]);
