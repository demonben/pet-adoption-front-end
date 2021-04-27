import React from "react";
import { useState } from "react";
import { useAuth } from "../context/auth";
import { createAnimal } from "../lib/api";

export default function AddPet(props) {
  const { onNewAnimal } = props;
  const auth = useAuth();
  const [nameAnimal, setNameAnimal] = useState("");
  const [type, setType] = useState("");
  const [adoptionStatus, setAdoptionStatus] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [bio, setBio] = useState("");
  const [hypoallergenic, setHypoallergenic] = useState("");
  const [dietaryRestriction, setDietaryRestriction] = useState("");
  const [breedOfAnimal, setBreedOfAnimal] = useState("");

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (loading || !nameAnimal) {
      return;
    }
    setLoading(true);
    const newAnimal = {
      nameAnimal,
      type,
      adoptionStatus,
      height,
      weight,
      color,
      bio,
      hypoallergenic,
      dietaryRestriction,
      breedOfAnimal,
    };
    try {
      const addNewAnimal = await createAnimal(newAnimal, auth.token);
    } catch (err) {
      alert("Error adding a new pet ");
    }

    setLoading(false);
    onNewAnimal(newAnimal);
    setNameAnimal("");
    setType("");
  };

  return (
    <div>
      <h1>add new pet</h1>
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
          <label htmlFor="adoptionStatus">Adoption status</label>
          <input
            type="text"
            name="adoptionStatus"
            value={adoptionStatus}
            onChange={(e) => {
              setAdoptionStatus(e.target.value);
            }}
          />
        </p>

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

        {loading && <span>Loading...</span>}
        {!loading && (
          <input className="btn btn-primary" type="submit" value="add" />
        )}
      </form>
    </div>
  );
}
