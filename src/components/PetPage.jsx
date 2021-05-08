import React from "react";
import { Card, Button } from "react-bootstrap";
import AnimalList from "./AnimalList";

export default function PetPage({animals}) {
  return (
    <div>
      <h1>Pets Page</h1>
      <div className="listAnimals">
        <AnimalList animals={animals} />
      </div>
    </div>
  );
}

