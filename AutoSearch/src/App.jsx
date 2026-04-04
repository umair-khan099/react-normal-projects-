import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [input, setinput] = useState("");
  const [show, setShow] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setRecipes(cache[input]);
      return;
    }
    const responese = await fetch(
      "https://dummyjson.com/recipes/search?q=" + input,
    );
    const data = await responese.json();
    setRecipes(data.recipes);
    setCache((prev) => ({ ...prev, [input]: data?.recipes }));
  };

  useEffect(() => {
    let timer = setTimeout(fetchData, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div>
      <SearchBar
        recipes={recipes}
        setinput={setinput}
        setShow={setShow}
        input={input}
        show={show}
      />
      <Home recipes={recipes} />
    </div>
  );
};

export default App;
