import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="flex items-center gap-4 text-xl text-[#606e03] cursor-pointer">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link>Cart</Link>
        <div className="ml-4 flex items-center gap-2">
          <button className="px-5 py-1 boredr-[#606e03] border rounded">
            Login
          </button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
