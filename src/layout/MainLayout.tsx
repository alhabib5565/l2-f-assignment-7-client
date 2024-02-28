import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  return (
    <div className={cn("bg-white", { "bg-slate-900 text-white": isDark })}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
