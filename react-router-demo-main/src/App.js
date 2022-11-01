import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";
import Router from "./components/Router";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
const App = () => {
  return (
    <>
      <Nav />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="users" element={<Users />}>
          <Route index element={<About />} />
          <Route path=":userId" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
      <Router />
    </>
  );
};

export default App;
