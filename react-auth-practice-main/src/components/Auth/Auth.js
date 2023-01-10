import React from "react";
import { useState } from "react";

import firebase from "./../../api/firebase";

const Auth = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);

  const inputChangeHandler = (event) => {
    setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let endpoint;
    if (isLogin) endpoint = "accounts:signUp";
  };
  return (
    <div>
      <h1>{isLogin ? "Login" : "SignUp"} Page</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={formDetails.email}
            name="email"
            onChange={inputChangeHandler}
          />
        </div>

        <div>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            value={formDetails.password}
            name="password"
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <button>{!isLogin ? "Sign up" : "Login"}</button>
        </div>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an account? Click to sign up"
          : "Have an account? Log in"}
      </button>
    </div>
  );
};

export default Auth;
