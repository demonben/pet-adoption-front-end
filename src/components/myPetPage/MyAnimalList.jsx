import React from 'react'
import { MyAnimalItem } from "./MyAnimalItem";

export const MyAnimalList = ({ myPets }) => {
    console.log(myPets);
  return (
    <div className="animalList">
      {myPets.map((animal) => (
        <MyAnimalItem animal={animal} key={animal.id} />
      ))}
    </div>
  );
};
