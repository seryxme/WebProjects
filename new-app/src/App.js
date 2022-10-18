import React from "react";
import Nav from "./components/Nav";
import CardList from "./components/Card/CardList";
import NewCard from "./components/NewCard";
import Counter from "./components/Counter/Counter";

const App = () => {
  return (
    <div>
      <Nav />
      <NewCard />
      <Counter />
      {/* <CardList /> */}
    </div>
  );
};

export default App;
