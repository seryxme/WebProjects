import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import { youtube } from "./api/youtube";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await youtube.get("search/", {
        params: {
          q: "cars",
          part: "snippet",
        },
      });
      console.log(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <Counter />
      <SearchBar />
    </>
  );
};

export default App;
