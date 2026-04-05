import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
