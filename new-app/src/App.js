import React, { useState } from "react";
import Nav from "./components/Nav";
import CardList from "./components/Card/CardList";
import NewCard from "./components/Card/NewCard";
import { faker } from "@faker-js/faker";
// import Counter from "./components/Counter/Counter";

const App = () => {
  const cardData = [
    {
      id: faker.datatype.uuid(),
      title: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),
      image: faker.image.food(),
    },

    {
      id: faker.datatype.uuid(),
      title: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),---.---.---.---
      image: faker.image.city(),
    },

    {
      id: faker.datatype.uuid(),
      title: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),
      image: faker.image.fashion(),
    },
  ];

  const [data, setData] = useState(cardData);

  return (
    <div>
      <Nav />
      <NewCard setData={setData} />
      {/* <Counter /> */}
      <CardList data={data} />
    </div>
  );
};

export default App;
