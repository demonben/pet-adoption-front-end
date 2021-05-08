import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import { getOwnAnimals } from "../../lib/api";
import { MyAnimalList } from "./MyAnimalList";
import localforage from "localforage";
import jwt_decode from "jwt-decode";

export default function MyPetsPage() {
  const [storage, setStorage] = useState("");
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    localforage.getItem("userToken").then((res) => {
      setStorage(res);
    });
  }, []);

  useEffect(() => {
    if (storage !== "") {
      const decoded = jwt_decode(storage);
      getOwnAnimals(storage, decoded.id).then((animals) => {
        setMyPets(animals.animals);
      });
    }
  }, [storage]);
  return (
    <div>
      <h1>My Pets Page</h1>
      <h2>You currently do not own or foster any pets.</h2>
      <MyAnimalList myPets={myPets} />
    
    </div>
  );
}
