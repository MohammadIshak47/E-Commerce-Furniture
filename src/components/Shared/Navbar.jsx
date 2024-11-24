import { NavLink } from "react-router-dom";
import { Icon1, Icon2, Icon3, Icon4 } from "../../assets/icons";
import { image1 } from "../../assets/images";

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-[#FFF] px-4 md:px-8 lg:px-16 h-[100px]">
      {/* Left side: Logo and Text */}
      <div className="navbar-start flex items-center space-x-2">
        <NavLink to="/">
          <img src={image1} alt="Logo" className="h-8 w-8" />
        </NavLink>
        <NavLink to="/" className="text-3xl font-bold text-[#000]">
          Furniro
        </NavLink>
        {/* Dropdown for smaller screens */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 bg-base-100 rounded-box z-[1] p-2 shadow-lg text-[#000]"
          >
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 text-[#000] ">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right side: Icons */}
      <div className="navbar-end flex items-center space-x-6">
        <NavLink to="/icon1" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
          <img src={Icon1} alt="Icon 1" className="h-6 w-6" />
        </NavLink>
        <NavLink to="/icon2" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
          <img src={Icon2} alt="Icon 2" className="h-6 w-6" />
        </NavLink>
        <NavLink to="/icon3" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
          <img src={Icon3} alt="Icon 3" className="h-6 w-6" />
        </NavLink>
        <NavLink to="/icon4" className={({ isActive }) => (isActive ? "text-coral-red" : "")}>
          <img src={Icon4} alt="Icon 4" className="h-6 w-6" />
        </NavLink>
      </div>
    </div>
    </>
  );
};

export default Navbar;
