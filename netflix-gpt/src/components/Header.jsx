import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="absolute top-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black z-10">
      {/* Logo */}
      <img className="w-44" src="../src/assets/pngwing.com.png" alt="logo" />

      {/* User Section */}
      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-10 rounded-full"
            src={
              user.photoURL ||
              "   https://cdn-icons-png.flaticon.com/512/3135/3135715.png "
            }
            alt="user"
          />
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 px-4 py-1 rounded hover:bg-red-700"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
