import React from "react";
import CardDetail from "./CardDetail";
import { faker } from "@faker-js/faker";
import "./CardList.css";

// function greet() {
//   return "Hello from greet";
// }

const CardList = () => {
  return (
    <div className="card-list">
      <CardDetail
        image={faker.image.city()}
        alt={faker.word.adjective()}
        title="The First Card"
        description="This is the first card on this app."
      />
      <br></br>
      <CardDetail
        image={faker.image.animals()}
        alt={faker.word.conjunction()}
        title="The Second Card"
        description="This is the second card on this app. No new cards were created."
      />
      <br></br>
      <CardDetail image={faker.image.avatar()} alt={faker.word.adjective()} />
    </div>
  );
};

CardDetail.defaultProps = {
  title: "New React App",
  description: "This is the default card message on this app.",
};

export default CardList;
