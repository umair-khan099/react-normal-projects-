import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = async (e) => {

    const message = checkValidate(
      email.current.value,
      password.current.value
    );

    if (message) {
      setErrorMsg(message);
      return;
    }

    if (!isSignIn && !name.current.value) {
      setErrorMsg("Name is required");
      return;
    }

    try {
      if (!isSignIn) {
        // SIGN UP
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        await updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL:
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        });

        navigate("/browser");
      } else {
        // SIGN IN
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        navigate("/browser");
      }
    } catch (error) {
      setErrorMsg(error.code + " - " + error.message);
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Header />

      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="flex justify-center items-center h-full">
        <form className="bg-black/60 backdrop-blur-md p-10 rounded-2xl w-[350px] flex flex-col gap-5 text-white border border-white/20">
          <h1 className="text-3xl font-bold text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full name"
              className="p-3 rounded bg-gray-800"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-800"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800"
          />

          {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}

          <button
            onClick={handleClick}
            className="bg-red-600 p-3 rounded font-semibold"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-sm text-center">
            {isSignIn ? "New here?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsSignIn(!isSignIn)}
              className="font-semibold cursor-pointer"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;