import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useSelector, useStore } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSreach = useSelector((store) => store.gpt.showGptSerch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, []);

  const handleShowgpt = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute top-0 w-full flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black z-10">
      {/* Logo */}
      <img className="w-44" src="../src/assets/pngwing.com.png" alt="logo" />

      {/* User Section */}
      {user && (
        <div className="flex items-center gap-4">
          <button
            onClick={handleShowgpt}
            className="text-white bg-red-600 px-4 py-1 rounded hover:bg-red-700"
          >
            Gpt Search
          </button>

          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 px-4 py-1 rounded hover:bg-red-700"
          >
            Sign out
          </button>
          <img
            className="w-10 rounded-full"
            src={
              user.photoURL ||
              "   https://cdn-icons-png.flaticon.com/512/3135/3135715.png "
            }
            alt="user"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
