import React from "react";

const NavBar = () => {
  return (
    <div>
      <ul className="flex items-center gap-4 text-xl text-[#606e03] cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <div className="ml-4 flex items-center gap-2">
          <button className="px-5 py-1 boredr-[#606e03] border rounded">
            Login
          </button>
          <button className="px-5 py-1 boredr-[#606e03] border rounded">
            Signin
          </button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
