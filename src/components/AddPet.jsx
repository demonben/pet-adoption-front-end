import React from "react";
import { useState } from "react";
import { createAnimal } from "../lib/api";

export default function AddPet(props) {
  const { onNewAnimal } = props;
  const [nameAnimal, setNameAnimal] = useState("");
  const [species, setSpecies] = useState("");

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (loading||!nameAnimal) {
      return;
    }
    setLoading(true);
    // const newAnimal = {
    //   id: 1234,
    //   nameAnimal,
    //   species,
    //   dateCreated: Date.now(),
    // };
    const newAnimal = await createAnimal(nameAnimal);
    setLoading(false);
    onNewAnimal(newAnimal);
    setNameAnimal("");
    setSpecies("");
  };

  return (
    <div>
      <h1>add new pet</h1>
      <form onSubmit={handleFormSubmit}>
        <p>
          <label htmlFor="text">Name of animal</label>
          <input
            type="text"
            name="text"
            value={nameAnimal}
            onChange={(e) => {
              setNameAnimal(e.target.value);
            }}
          />
        </p>

        <label htmlFor="species">Species of animal</label>
        <input
          type="text"
          name="species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />
        {loading && <span>Loading...</span>}
        {!loading && (
          <input className="btn btn-primary" type="submit" value="add" />
        )}
      </form>
    </div>
  );
}
