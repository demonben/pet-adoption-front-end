import React from 'react'
import {CardInfoAnimal} from "../CardInfoAnimal"


export const MyAnimalItem = ({ animal }) => {
  return (
    <div className="animalItem">
      {/* <div className="dateStyle">
        {new Date(animal.dateCreated).toLocaleDateString()}
      </div> */}
      <img src={animal.picture} alt="No picture" width="200" height="200"></img>
      {/* {console.log(animal.picture)} */}
      <div>{animal.name_animal}</div>
      <div>{animal.type}</div>
      {/* <Link to={`/pet/${animal.id}`}>Change</Link> */}
      <CardInfoAnimal animal={animal} />
    </div>
  );
};
