import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const MySidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      linkName: "Dashboard",
      link: "/dashboard/home",
    },
    {
      linkName: "Create Supply",
      link: "/dashboard/create-supply",
    },
    {
      linkName: " Supply",
      link: "/dashboard/supllies",
    },
    {
      linkName: "home",
      link: "/",
    },
  ];

  return (
    <>
      {menuOpen ? (
        <Menu
          onClick={() => setMenuOpen(!menuOpen)}
          className="size-10 fixed top-4 left-6  lg:hidden cursor-pointer text-primary bg-white p-1 rounded-full z-20"
        />
      ) : (
        <X
          onClick={() => setMenuOpen(!menuOpen)}
          className="size-10 fixed top-4 left-6  lg:hidden cursor-pointer text-primary bg-white p-1 rounded-full z-20"
        />
      )}
      <nav
        className={cn(
          "max-w-[300px] w-full min-h-screen h-full fixed top-0  left-0 translate-x-[0] transition-all bg-primary z-10 p-6 overflow-y-scroll ",
          { "translate-x-[-100%] ": menuOpen }
        )}
      >
        <ul className="flex flex-col gap-4 mt-10">
          {menuItems.map((menuItem, index) => (
            <li
              className="bg-[#F1F5F9] px-4 py-2 rounded-md text-center"
              key={index}
            >
              <NavLink
                className={({ isActive }) =>
                  cn("w-full block hover:text-primary", {
                    "text-primary": isActive,
                  })
                }
                key={index}
                to={menuItem.link}
              >
                {menuItem.linkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MySidebar;

// import { X } from "lucide-react";
// import { Dispatch, SetStateAction } from "react";
// import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
// import { NavLink } from "react-router-dom";

// type TMysidebarProps = {
//   collapsed: boolean;
//   setCollapsed: Dispatch<SetStateAction<boolean>>;
// };

// const MySidebar = ({ collapsed, setCollapsed }: TMysidebarProps) => {
//   const handleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };
//   return (
//     <div>
//       <Sidebar breakPoint="lg" collapsed={collapsed} className="h-screen ">
//         <div className="flex justify-end mb-2">
//           <X
//             onClick={handleCollapsed}
//             className="p-1 bg-primary rounded-full text-white size-8 cursor-pointer mx-6 mt-6"
//           />
//         </div>
//         <Menu
//           menuItemStyles={{
//             button: {
//               [`&.active`]: {
//                 backgroundColor: "#E05A45",
//                 color: "#ffffff",
//               },
//             },
//           }}
//         >
//           <MenuItem
//             className="hover:text-primary"
//             // icon={<Home />}
//             component={<NavLink to="/dashboard/home" />}
//           >
//             Dashboard
//           </MenuItem>
//           <MenuItem
//             className="hover:text-primary"
//             component={<NavLink to="/dashboard/supllies" />}
//           >
//             Supplies
//           </MenuItem>
//           <MenuItem
//             className="hover:text-primary"
//             component={<NavLink to="/dashboard/create-supply" />}
//           >
//             Create Supply
//           </MenuItem>
//         </Menu>
//       </Sidebar>
//     </div>
//   );
// };

// export default MySidebar;
