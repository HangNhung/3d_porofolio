import { Link } from "react-router-dom";
import { styles } from "../styles";
import { useState } from "react";
import { menu, close as closeIcon } from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActiveLink("");
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Ellen Hang{" "}
            <span className="sm:block hidden">| Frontend Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${activeLink === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActiveLink(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            alt="menu"
            src={menu}
            className={`absolute transition-all duration-500 ease-in-out ${toggle ? "opacity-0" : "opacity-100"} w-[28px] h-[28px] object-contain cursor-pointer`}
            onClick={() => setToggle(!toggle)}
          />
          <img
            alt="menu"
            src={closeIcon}
            className={`absolute transition-all duration-500 ease-out ${!toggle ? "opacity-0" : "opacity-100"} object-contain cursor-pointer`}
            onClick={() => setToggle(!toggle)}
          />
          {/* <div className={`${!toggle ? "hidden": "flex"}`}>a</div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
