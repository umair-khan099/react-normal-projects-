import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative w-full h-screen">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Center Form */}
      <div className="flex justify-center items-center h-full">
        <form className="bg-black/50 backdrop-blur-xs p-10 rounded-2xl shadow-2xl w-[350px] flex flex-col gap-5 text-white border border-white/20">
          <h1 className="text-3xl font-bold text-center">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              type="text"
              placeholder="Full name"
              className="p-3 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="p-3 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <button className="bg-red-600 hover:bg-red-700 transition duration-300 p-3 rounded font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-sm text-gray-300 text-center">
            {isSignIn ? "New to Netflix?" : "Already registered?"}{" "}
            <span
              onClick={handleToggle}
              className="text-white font-semibold cursor-pointer hover:underline"
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
