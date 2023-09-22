import { useState } from "react";
import useColorMode from "../../hooks/useColorMode";

import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight, BiMenu, BiMoon, BiSun } from "react-icons/bi";
import LOGO from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [colorMode, setColorMode] = useColorMode();

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const toggleColorMode = () => {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  };

  return (
    <header className="relative pb-24 dark:bg-slate-950 dark:text-white m-0">
      <div className=" w-11/12 max-w-6xl mx-auto flex justify-between items-center py-3">
        <Link to="/">
          <img className="w-40 m-0" src={LOGO} alt="Lafia Studio" />
        </Link>
        {isOpen ? (
          <nav className="absolute top-0 left-0 right-0 z-10 bg-slate-400 dark:bg-slate-950 h-screen flex flex-col justify-center items-center gap-12">
            <NavLink exact="true" to="/">
              Home
            </NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        ) : (
          <nav className=" hidden md:flex justify-center gap-8">
            <NavLink exact="true" to="/">
              Home
            </NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        )}
        <div className="w-40 flex justify-end gap-3">
          <button
            onClick={toggleColorMode}
            className="text-2xl bg-slate-200 dark:bg-slate-900 p-2 rounded-full"
          >
            {colorMode === "dark" ? <BiMoon /> : <BiSun />}
          </button>
          <a
            className="hidden md:block px-3.5 py-1 border-2 border-black dark:border-blue-600 rounded-3xl"
            href="#"
          >
            Let's do it
          </a>
        </div>
        <button onClick={toggleMenu} className="text-4xl z-20 md:hidden">
          {isOpen ? <BiMenuAltRight /> : <BiMenu />}
        </button>
      </div>
    </header>
  );
};
export default Header;
