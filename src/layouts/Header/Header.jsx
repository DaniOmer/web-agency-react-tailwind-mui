import { Link } from "react-router-dom";
import LOGO from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto flex justify-between items-center py-3">
      <img className="w-40 m-0" src={LOGO} alt="Lafia Studio" />
      <nav className="flex justify-center gap-8">
        <Link to="/">Home</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="w-40 flex justify-end">
        <a className="px-2 py-1 border-2 border-black rounded-3xl" href="#">
          Let's do it
        </a>
      </div>
    </header>
  );
};
export default Header;
