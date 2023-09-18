import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltRight, BiMenu } from "react-icons/bi";
import LOGO from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <header className="relative">
      <div className=" w-11/12 max-w-6xl mx-auto flex justify-between items-center py-3">
        <img className="w-40 m-0" src={LOGO} alt="Lafia Studio" />
        {isOpen ? (
          <nav className="absolute top-0 left-0 right-0 z-10 bg-slate-400 h-screen flex flex-col justify-center items-center gap-12">
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
        <div className="w-40 hidden md:flex justify-end">
          <a className="px-2 py-1 border-2 border-black rounded-3xl" href="#">
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
