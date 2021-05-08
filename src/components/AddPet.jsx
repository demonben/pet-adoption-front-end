import React from "react";
import { useState } from "react";
import { useAuth } from "../context/auth";
import { createAnimal, uploadPicture } from "../lib/api";
import { Form } from "react-bootstrap";
import { v4 as uuid4 } from "uuid";

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
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);


  const handleFormSubmit = async (event) => {
    event.preventDefault();
setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    const id = uuid4();

    const picture = await uploadPicture(id, auth.token, formData);
    console.log("picture", picture.pictureUrl);
    
    const newAnimal = {
      id,
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
      urlAnimal: picture.pictureUrl,
    };
    
    console.log(newAnimal);
console.log(loading);
    onNewAnimal(newAnimal);
    createAnimal(newAnimal, auth.token);
    
    setLoading(false);
    alert("Pet was added");
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
            type="number"
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
            type="number"
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

        <Form.Group>
          <Form.File
            label={"Add pet image"}
            onInput={(event) => setImage(event.target.files[0])}
          />
        </Form.Group>
        {loading && <span>Loading...</span>}
        {!loading && (
          <input className="btn btn-primary" type="submit" value="add" />
        )}
      </form>
    </div>
  );
}
