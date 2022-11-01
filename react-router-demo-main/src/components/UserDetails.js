import React from "react";
import { useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Mike", gender: "male" },
  { id: 2, name: "Abby", gender: "female" },
  { id: 3, name: "Jummy", gender: "female" },
  { id: 4, name: "Tunde", gender: "male" },
  { id: 5, name: "Asake", gender: "female" },
];

const UserDetails = () => {
  const { userId } = useParams();
  return (
    <>
      <h2>UserDetails &rarr; {userId}</h2>
      <h3>Welcome to {users[userId - 1].name}'s page</h3>
    </>
  );
};

export default UserDetails;
