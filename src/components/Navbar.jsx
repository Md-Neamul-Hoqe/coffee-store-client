import logo from "../assets/images/more/logo1.png";
import navbarBg from "../assets/images/more/15.jpg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header
        className="navbar"
        style={{ backgroundImage: `url(${navbarBg})` }}>
        <div className="mx-auto my-[15px]">
          <img src={logo} className="w-[75px] h-auto" alt="Espresso Emporium" />{" "}
          <a className="btn btn-ghost text-white font-rancho normal-case text-5xl">
            Espresso Emporium
          </a>
        </div>
      </header>
      <nav className="flex items-center justify-center gap-20 py-5 font-rancho bg-coffee-header-gray text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/SignUp">Sign Up</NavLink>
        <NavLink to="/SignIn">Sign In</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
