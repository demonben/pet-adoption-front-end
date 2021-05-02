import React from "react";

export const UserItemDash = ({ user, onDeleteUser }) => {
  const handleOnDeleteClick=()=>{
    onDeleteUser();
  };
  return (
    <div className="animalItem">
      <div>{user.first_name}</div>
      <div>{user.last_name}</div>
      <div>
        <button onClick={handleOnDeleteClick}>Delete</button>
      </div>
    </div>
  );
};
