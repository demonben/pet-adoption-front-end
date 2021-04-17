import React from "react";
import { Card, Button } from "react-bootstrap";
import AnimalList from "./AnimalList";

export default function PetPage({animals}) {
  return (
    <div>
      <h1>Pet Page</h1>
      <div className="listAnimals">
        <AnimalList animals={animals} />
      </div>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
}
