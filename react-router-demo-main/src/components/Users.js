import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const newUsers = [
  { id: 1, name: "Mike", gender: "male" },
  { id: 2, name: "Abby", gender: "female" },
  { id: 3, name: "Jummy", gender: "female" },
  { id: 4, name: "Tunde", gender: "male" },
  { id: 5, name: "Asake", gender: "female" },
];

const Users = () => {
  const [users, setUsers] = useState(newUsers);
  const [params, setParams] = useSearchParams();
  const gender = params.get("gender");

  useEffect(() => {
    if (!gender) setUsers(newUsers);
    else setUsers(newUsers.filter((u) => u.gender === gender));
  }, [gender]);
  return (
    <div>
      <h1>Users Page</h1>
      <div>
        <button onClick={() => setParams({})}>All Users</button>
        <button onClick={() => setParams({ gender: "male" })}>
          Male Users
        </button>
        <button onClick={() => setParams({ gender: "female" })}>
          Female Users
        </button>
        {users.map((user) => (
          <h3 key={user.id}>
            {user.name} &rarr; is a {user.gender}
          </h3>
        ))}
        ;
      </div>
      <Outlet />
    </div>
  );
};

export default Users;
