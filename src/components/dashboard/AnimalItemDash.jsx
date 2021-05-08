import React from "react";
import { deleteAnimal } from "../../lib/api";
import { useAuth } from "../../context/auth";

export const AnimalItemDash = ({ animal, onDeleteAnimal }) => {
  const auth = useAuth();
  const handleOnDeleteClick = async () => {
    console.log(animal.id);
    await deleteAnimal(animal.id, auth.token);
    onDeleteAnimal(animal.id);
  };
  {
    console.log(animal);
  }
  return (
    <div className="animalItem">
      
      <div>{animal.name_animal}</div>
      <div>{animal.type}</div>
      <div>{animal.type}</div>
      <div>
        <button onClick={handleOnDeleteClick}>Delete</button>
      </div>
    </div>
  );
};
