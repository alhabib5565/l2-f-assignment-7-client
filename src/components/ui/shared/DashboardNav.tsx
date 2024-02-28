import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "../button";
import { Moon } from "lucide-react";
import { logout } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { toggleTheme } from "@/redux/features/theme/themeSlice";
import DContainer from "@/layout/DContainer";
import { cn } from "@/lib/utils";

const DashboardNab = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successful!");
  };

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };
  const { isDark } = useAppSelector((state) => state.theme);
  return (
    <div
      className={cn("w-full bg-primary py-4 px-4 sticky z-40 right-0 top-0 ", {
        "bg-slate-800": isDark,
      })}
    >
      <DContainer className="flex justify-end items-center gap-5">
        <Button
          variant={"outline"}
          className="bg-gray-100 text-primary hover:text-primary"
          onClick={handleLogout}
        >
          Logout
        </Button>
        <Button
          variant={"outline"}
          className="bg-gray-100 text-primary hover:text-primary"
          onClick={handleChangeTheme}
        >
          <Moon />
        </Button>
      </DContainer>
    </div>
  );
};

export default DashboardNab;
