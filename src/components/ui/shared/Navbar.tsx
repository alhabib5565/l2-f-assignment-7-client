import Container from "@/layout/Container";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import MyNavLink from "../MyNavLink";
import { logout, user } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const logedInUser = useAppSelector(user);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successful!");
  };

  const navItems = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/relief-goods",
      pathName: "Relief Goods",
    },
  ];
  return (
    <div className="bg-white border-b-2 fixed w-full top-0 z-10">
      <Container className="flex flex-col lg:flex-row lg:justify-between items-center gap-6 py-6">
        <Link className="text-4xl font-bold text-primary " to="/">
          AidBox
        </Link>
        <ul className="flex items-center gap-4 lg:gap-8">
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
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <MyNavLink path="/login" pathName="Login" />
          )}
        </ul>
      </Container>
    </div>
  );
};

export default Navbar;