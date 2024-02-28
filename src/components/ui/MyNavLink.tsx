import { NavLink } from "react-router-dom";

type TMyNavLink = {
  path: string;
  pathName: string;
};

const MyNavLink = ({ path, pathName }: TMyNavLink) => {
  return (
    <NavLink className="my-nav-item" to={path}>
      {pathName}
    </NavLink>
  );
};

export default MyNavLink;
