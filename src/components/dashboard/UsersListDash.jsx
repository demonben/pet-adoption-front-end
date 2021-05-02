import React from "react";
import { UserItemDash } from "./UserItemDash";

function UsersListDash({ users, onDeleteUser }) {
  return (
    <div>
      <h1>users list</h1>
      <div className="animalList">
        {users.map((user, index) => (
          <UserItemDash user={user}
           key={user.id} 
           onDeleteUser={() => {onDeleteUser(index)}}
            />
        ))}
      </div>
    </div>
  );
}

export default UsersListDash;
