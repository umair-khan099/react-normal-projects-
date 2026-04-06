import React from "react";
import Header from "./components/common/Header";
import Body from "./components/pages/Body";

const App = () => {
  return (
    <div className="bg-[#fffffc] w-full min-h-screen px-10 py-5">
      <Header />
      <Body />
    </div>
  );
};

export default App;
