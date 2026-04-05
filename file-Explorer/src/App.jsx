import React, { useState } from "react";
import json from "./data.json";
import NestedList from "./components/NestedList";

const App = () => {
  const [data, setdata] = useState(json);

  const addList = (parentId) => {

  };
  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-4">File Explorer</h1>
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg w-fit">
        <NestedList list={data} />
      </div>
    </div>
  );
};

export default App;
