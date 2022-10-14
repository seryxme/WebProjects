import React from "react";

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      <p>
        <h2>React-shun time!</h2>
      </p>
      <label for="name">Name</label>
      <input id="name" placeholder="Enter your name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

export default App;
