import React, { useEffect, useState } from "react";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [input, setinput] = useState("");
  const [show, setShow] = useState(false);

  const fetchData = async () => {
    const responese = await fetch(
      "https://dummyjson.com/recipes/search?q=" + input,
    );
    const data = await responese.json();
    setRecipes(data.recipes);
  };

  useEffect(() => {
    let timer = setTimeout(fetchData, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        🍜 Auto Recipe Search
      </h1>

      <div className="w-full max-w-md mb-6">
        <input
          name="title"
          value={input}
          type="text"
          placeholder="Search delicious recipes..."
          onChange={(e) => setinput(e.target.value)}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-200"
        />
      </div>

      {show && (
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-4 space-y-3 max-h-[400px] overflow-y-auto">
          {recipes.map((recipes, index) => (
            <div
              key={index}
              className="p-3 bg-gray-50 rounded-lg hover:bg-purple-50 cursor-pointer transition"
            >
              <p className="text-gray-700 font-medium">{recipes.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
