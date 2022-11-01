import React, { useState } from "react";
import Button from "../Button";
import "./NewCard.css";
import { faker } from "@faker-js/faker";

const NewCard = ({ setData }) => {
  // const [title, setTitle] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  const inputChangeHandler = (event) => {
    setInputs((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const cardObj = {
      id: faker.datatype.uuid(),
      ...inputs,
      image: faker.image.food(),
    };
    setData((prevData) => [cardObj, ...prevData]);
    setInputs({
      title: "",
      description: "",
    });
  };

  return (
    <form className="new-card" onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="title">Card Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={inputs.title}
          onChange={inputChangeHandler}
        />
      </div>

      <div>
        <label htmlFor="description">Card Description</label>
        <input
          type="text"
          id="description"
          value={inputs.description}
          name="description"
          onChange={inputChangeHandler}
        />
      </div>

      <Button color="yellow" bg="red">
        Add Card
      </Button>
    </form>
  );
};

export default NewCard;
