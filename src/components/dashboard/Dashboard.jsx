import React from "react";
import { AnimalListDash } from "./AnimalListDash";
import UsersListDash from "./UsersListDash";

export default function Dashboard({ animals, users, onDeleteAnimal, onDeleteUser }) {
  return (
    <div>
      {/* {console.log(animals)}
      {console.log(users)} */}
      <h1>Dashboard</h1>
      <h2>Animals</h2>
      <AnimalListDash animals={animals} onDeleteAnimal={onDeleteAnimal} />
      <UsersListDash users={users} onDeleteUser={onDeleteUser} />
    </div>
  );
}
