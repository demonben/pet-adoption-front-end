import React, { useEffect } from "react";
import Modal from "react-modal";
import { useState } from "react";
import { useAuth } from "../context/auth";
import { takePet, returnPet } from "../lib/api";
import jwt_decode from "jwt-decode";

Modal.setAppElement("#root");

export const CardInfoAnimal = ({ animal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idUserState, setIdUserState] = useState("");
  const token = useAuth().token;

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setIdUserState(decoded.id);
    }
  }, [token]);

  const isAvailable = !animal.owner_id;
  const isFostered = animal.adoption_status === "fostered" || "adopted";
  
  const isMyPet = animal.owner_id === idUserState;
  const status = isFostered ? "adopted" : "fostered";

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button
        className="btn btn-primary auth"
        onClick={() => setModalIsOpen(true)}
      >
        Show pet info
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => handleCloseModal()}>
        <div>Name: {animal.name_animal}</div>
        <div>Type: {animal.type}</div>
        <div>Weight: {animal.weight}</div>
        <div>Height: {animal.height}</div>
        <div>Color: {animal.color}</div>
        <div>Adaption status: {animal.adoption_status}</div>
        <img
          src={animal.picture}
          alt="No picture"
          width="200"
          height="200"
        ></img>
        <div>
          {(isAvailable || isFostered) && (
            <button
              onClick={() => {
                takePet(animal.id, token, status, idUserState);
                alert(status);
              }}
              className="btn btn-primary auth"
            >
              {isFostered ? "adopt" : "foster"}
            </button>
          )}

          {isMyPet && (
            <button
              onClick={() => {
                returnPet(animal.id);
                alert("returned");
              }}
              className="btn btn-primary auth"
            >
              return
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
};
