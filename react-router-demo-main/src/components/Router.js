import React from "react";
import { useRoutes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Register from "./Register";
import UserDetails from "./UserDetails";
import Users from "./Users";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "users",
      element: <Users />,
      children: [
        {
          index: true,
          element: <About />,
        },
        {
          path: ":userId",
          element: <UserDetails />,
        },
      ],
    },

    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
};

export default Router;
