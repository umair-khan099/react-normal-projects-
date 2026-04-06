import React, { Children, useState } from "react";
import json from "./data.json";
import NestedList from "./components/NestedList";

const App = () => {
  const [data, setdata] = useState(json);

  const addNodeList = (parentId) => {
    const name = prompt("Enter Name");

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now(),
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }

        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }

        return node;
      });
    };

    setdata((prev) => updateTree(prev));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-4">File Explorer</h1>
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg w-fit">
        <NestedList list={data} addNodeList={addNodeList} />
      </div>
    </div>
  );
};
export default App;
