import logo from "../assets/images/more/logo1.png";
import navbarBg from "../assets/images/more/15.jpg";
const Navbar = () => {
  return (
    <nav className="navbar" style={{backgroundImage: `url(${navbarBg})`}}>
      <div className="mx-auto my-[15px]">
        <img src={logo} className="w-[75px] h-auto" alt="Espresso Emporium" />{" "}
        <a className="btn btn-ghost text-white font-rancho normal-case text-5xl">Espresso Emporium</a>
      </div>
    </nav>
  );
};

export default Navbar;
