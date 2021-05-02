// import React from 'react'
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getAnimalById,changeAnimal } from "../lib/api";
import { useAuth } from "../context/auth";

function PetCard() {
  const [animal, setAnimal] = useState("");
  const [nameAnimal, setNameAnimal] = useState("");
  const [type, setType] = useState("");

  const auth = useAuth();
  const { animalId } = useParams();
  // console.log(animalId);

  useEffect(() => {
    getAnimalById(animalId, auth.token).then((data) => {
      console.log(data);
      setAnimal(data.animal.name_animal);
      setNameAnimal(data.animal.name_animal);
      setType(data.animal.type);
    });
  }, [animalId, auth.token]);
  // console.log(animal);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log('next')
    changeAnimal(nameAnimal, type, animalId, auth.token);
  };

  return (
    <div>
      <h1>animal profile</h1>
      <div>{animal.name_animal}</div>
      <div>{animal.type}</div>
      <form onSubmit={handleFormSubmit}>
        <p>
          <label htmlFor="animalName">Name of animal</label>
          <input
            type="text"
            name="animalName"
            value={nameAnimal}
            // defaultValue={animal.name_animal}
            onChange={(e) => {
              setNameAnimal(e.target.value);
            }}
          />
        </p>

        <label htmlFor="type">Species of animal</label>
        <input
          type="text"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <input className="btn btn-primary" type="submit" value="save" />
      </form>
    </div>
  );
}

export default PetCard;
