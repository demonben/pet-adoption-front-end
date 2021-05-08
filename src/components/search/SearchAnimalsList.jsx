import React from 'react'
import { ItemSearchAnimal } from './ItemSearchAnimal'

export const SearchAnimalsList = ({simpleSearch}) => {
    console.log(simpleSearch)
  return (
    <div className="animalList">
      {simpleSearch.map((animal)=>(<ItemSearchAnimal animal={animal} key={animal.id}/>))}
    </div>
  );
};
