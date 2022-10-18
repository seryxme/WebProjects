import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(null);

  const buttonClickHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);

    console.log(counter);
  };

  const buttonClickHandlerDecrement = () => {
    setCounter((prevCounter) => (prevCounter <= 0 ? 0 : prevCounter - 1));

    console.log(counter);
  };

  const buttonClickHandlerIncrementBy = () => {
    setCounter((prevCounter) => prevCounter + +inputValue);
    console.log(counter);
  };

  const inputChangeHandler = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  return (
    <div>
      <p>counter: {counter}</p>
      <button
        className="counter_button"
        onClick={buttonClickHandler}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-5"
      >
        Increment
      </button>

      <button
        className="counter_button_decr"
        onClick={buttonClickHandlerDecrement}
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-5"
      >
        Decrement
      </button>
      <div>
        <input
          placeholder="Enter a number"
          type="number"
          min="0"
          value={inputValue}
          onChange={inputChangeHandler}
        />
        <button
          className="counter_button"
          onClick={buttonClickHandlerIncrementBy}
        >
          IncrementBy
        </button>
      </div>
    </div>
  );
};

export default Counter;
