import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [showNavbar, setshowNavbar] = useState(false);
  return (
    <div className="flex justify-center bg-[#F6F7FA] relative">
      <div className="flex justify-between w-[93%] xl:w-[85%] items-center py-3">
        <h1>Dayal</h1>
        <div className="hidden lg:block">
          <ul className="flex space-x-10">
            <li>Home</li>
            <li>About me</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

        <div onClick={() => setshowNavbar(!showNavbar)} className="lg:hidden">
          <MenuIcon />
        </div>
      </div>
      {showNavbar && (
        <div className="absolute left-0 top-10 w-[100%] bg-[#F6F7FA] flex justify-center py-2 space-y-4">
          <ul className="w-[93%]">
            <li>Home</li>
            <li>About me</li>
            <li>Contact</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
