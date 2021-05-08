import React from 'react'
import {CardInfoAnimal} from "../CardInfoAnimal"

export const ItemSearchAnimal = ({animal}) => {
    console.log(animal)
    return (
      <div className="animalItem">
        <img
          src={animal.picture}
          alt="No picture"
          width="200"
          height="200"
        ></img>
        <div>{animal.name_animal}</div>
        <div>{animal.type}</div>
        <CardInfoAnimal animal={animal} />
      </div>
    );
}
