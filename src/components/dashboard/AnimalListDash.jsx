import React from "react";
import { AnimalItemDash } from "./AnimalItemDash";

export const AnimalListDash = ({ animals, onDeleteAnimal }) => {
  return (
    <div className="animalList">
      {/* {console.log(animals)} */}
      {animals.map((animal, index) => (
        <AnimalItemDash
          animal={animal}
          key={animal.id}
          onDeleteAnimal={() => onDeleteAnimal(index)}
        />
      ))}
    </div>
  );
};
