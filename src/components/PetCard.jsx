import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getAnimalById, changeAnimal } from "../lib/api";
import { useAuth } from "../context/auth";

function PetCard() {
  const [nameAnimal, setNameAnimal] = useState("");
  const [type, setType] = useState("");
  const [animal, setAnimal] = useState("");
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [bio, setBio] = useState("");
  const [hypoallergenic, setHypoallergenic] = useState("");
  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [breedOfAnimal, setBreedOfAnimal] = useState("");

  const auth = useAuth();
  const { animalId } = useParams();

  useEffect(() => {
    getAnimalById(animalId, auth.token).then((data) => {

      setAnimal(data.animal.name_animal);
      setNameAnimal(data.animal.name_animal);
      setType(data.animal.type);
      setHeight(data.animal.height);
      setWeight(data.animal.weight);
      setColor(data.animal.color);
      setBio(data.animal.bio);
      setHypoallergenic(data.animal.hypoallergenic);
      setDietaryRestriction(data.animal.dietary_restrictions);
      setBreedOfAnimal(data.animal.breed_of_animal);
    });
  }, [animalId, auth.token]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    changeAnimal(nameAnimal, type, animalId, auth.token);
  };

  return (
    <div>
      <h1>animal profile</h1>
      <form onSubmit={handleFormSubmit}>
        <p>
          <label htmlFor="animalName">Name of animal</label>
          <input
            type="text"
            name="animalName"
            value={nameAnimal}
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

        <p>
          <label htmlFor="height">height</label>
          <input
            type="text"
            name="height"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="weight">Weight</label>
          <input
            type="text"
            name="weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="hypoallergenic">Hypoallergenic</label>
          <input
            type="text"
            name="hypoallergenic"
            value={hypoallergenic}
            onChange={(e) => {
              setHypoallergenic(e.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="dietaryRestriction">Dietary Restriction</label>
          <input
            type="text"
            name="dietaryRestriction"
            value={dietaryRestriction}
            onChange={(e) => {
              setDietaryRestriction(e.target.value);
            }}
          />
        </p>

        <p>
          <label htmlFor="breedOfAnimal">BreedOfAnimal</label>
          <input
            type="text"
            name="breedOfAnimal"
            value={breedOfAnimal}
            onChange={(e) => {
              setBreedOfAnimal(e.target.value);
            }}
          />
        </p>

        <input className="btn btn-primary" type="submit" value="save" />
      </form>
    </div>
  );
}

export default PetCard;
