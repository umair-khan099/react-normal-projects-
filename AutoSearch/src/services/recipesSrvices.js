import React, { useEffect } from "react";

const fetchData = async (query) => {
  let key = query.toLowerCase();
  if (cache[key]) {
    setRecipes(cache[key]);
    return;
  }

//   Fetching the data
  const responese = await fetch(
    "https://dummyjson.com/recipes/search?q=" + key,
  );

// parsinng Data input json Formate
  const data = await responese.json();
  setRecipes(data.recipes);
  setCache((prev) => ({ ...prev, [key]: data?.recipes }));
};

// for Controling lifeCycle 
useEffect(() => {
  let timer = setTimeout(fetchData, 500);
  return () => {
    clearTimeout(timer);
  };
}, [key]);
