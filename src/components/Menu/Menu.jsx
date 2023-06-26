import { NavLink } from "react-router-dom";
import {
  FaBriefcase,
  FaHome,
  FaRegUserCircle,
  FaStarOfDavid,
  FaUserAlt,
} from "react-icons/fa";
const Menu = () => {
  return (
    <div>
      <ul className="menu mt-10  w-16  rounded-box">
        <NavLink className="menubar">
          <a className="tooltip tooltip-right mb-10 " data-tip="Home">
            <FaHome className="h-5 w-5"></FaHome>
          </a>
        </NavLink>
        <NavLink className="menubar">
          <a className="tooltip tooltip-right mb-10" data-tip="About Me">
            <FaUserAlt className="h-5 w-5"></FaUserAlt>
          </a>
        </NavLink>
        <NavLink className="menubar">
          <a className="tooltip tooltip-right mb-10" data-tip="Skills">
            <FaStarOfDavid className="h-5 w-5"></FaStarOfDavid>
          </a>
        </NavLink>
        <NavLink className="menubar">
          <a className="tooltip tooltip-right mb-10" data-tip="Projects">
            <FaBriefcase className="h-5 w-5"></FaBriefcase>
          </a>
        </NavLink>
        <NavLink className="menubar">
          <a className="tooltip tooltip-right mb-10" data-tip="Contact">
            <FaRegUserCircle className="h-6 w-6"></FaRegUserCircle>
          </a>
        </NavLink>
      </ul>
    </div>
  );
};

export default Menu;
