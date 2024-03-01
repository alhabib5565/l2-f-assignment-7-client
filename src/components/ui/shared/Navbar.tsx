import Container from "@/layout/Container";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MyNavLink from "../MyNavLink";
import { logout, user } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { Menu, Moon } from "lucide-react";
import { toggleTheme } from "@/redux/features/theme/themeSlice";
import BeComeAVolunteer from "@/components/volunteer/BeComeAVolunteer";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useAppDispatch();
  const logedInUser = useAppSelector(user);
  const { isDark } = useAppSelector((state) => state.theme);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successful!");
  };

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  const navItems = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/about-us",
      pathName: "About Us",
    },
    {
      path: "/relief-goods",
      pathName: "Relief Goods",
    },
  ];
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white fixed w-full top-0 z-50"
    >
      <Container className="flex lg:justify-between justify-end items-center gap-6 py-6">
        <Link className="text-4xl font-bold text-primary " to="/">
          AidBox
        </Link>
        <Button className="lg:hidden" onClick={handleChangeTheme}>
          <Moon />
        </Button>
        <ul className="hidden  lg:flex items-center gap-4 lg:gap-8">
          {navItems.map((item) => (
            <MyNavLink
              key={item.pathName}
              path={item.path}
              pathName={item.pathName}
            />
          ))}
          {logedInUser && logedInUser.email ? (
            <>
              <MyNavLink path="/dashboard" pathName="Dashboard" />
              <BeComeAVolunteer />
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <MyNavLink path="/login" pathName="Login" />
          )}
          <Button onClick={handleChangeTheme}>
            <Moon />
          </Button>
        </ul>

        {/* for mobile */}
        <nav
          className={cn(
            "bg-white pt-8 w-[250px] h-screen absolute top-0 left-0  translate-x-[-100%] transition-all duration-200 shadow-lg lg:hidden",
            { "translate-x-[0] ": menuOpen },
            { "bg-slate-900": isDark }
          )}
        >
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute top-6 left-[100%] px-2 py-1 bg-primary text-white rounded-r-full"
          >
            <Menu className="w-6 h-6" />
          </Button>

          <ul className={cn("flex mt-10 flex-col items-center gap-4 px-6")}>
            {navItems.map((item, index) => (
              <Link
                onClick={() => setMenuOpen(false)}
                key={index}
                className={cn("w-full text-center btn-outline border-none ")}
                to={item.path}
              >
                {item.pathName}
              </Link>
            ))}
            {logedInUser && logedInUser.email ? (
              <>
                <Link
                  onClick={() => setMenuOpen(false)}
                  className={cn("w-full text-center btn-outline border-none ")}
                  to="dashboard"
                >
                  Dashboard
                </Link>
                <BeComeAVolunteer />
                <Button className="w-full" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Link
                onClick={() => setMenuOpen(false)}
                className={cn("w-full text-center btn-outline border-none ")}
                to="/login"
              >
                Login
              </Link>
            )}
          </ul>
        </nav>
      </Container>
    </motion.div>
  );
};

export default Navbar;
