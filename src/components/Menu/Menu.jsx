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
      <ul className="menu lg:fixed h-full pt-12  text-white rounded-box">
        <li>
          <a
            href="#home"
            className="tooltip tooltip-right mb-8  "
            data-tip="Home"
          >
            <FaHome className="h-5 w-5 "></FaHome>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="tooltip tooltip-right mb-8"
            data-tip="About Me"
          >
            <FaUserAlt className="h-5 w-5"></FaUserAlt>
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="tooltip tooltip-right mb-8"
            data-tip="Skills"
          >
            <FaStarOfDavid className="h-5 w-5"></FaStarOfDavid>
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="tooltip tooltip-right mb-8"
            data-tip="Projects"
          >
            <FaBriefcase className="h-5 w-5"></FaBriefcase>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="tooltip tooltip-right mb-10"
            data-tip="Contact"
          >
            <FaRegUserCircle className="h-6 w-6"></FaRegUserCircle>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
