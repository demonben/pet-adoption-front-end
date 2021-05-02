import React, { useState } from "react";
import Modal from "react-modal";
import "./SignUp.css";
import { createNewProfile } from "../lib/api";

Modal.setAppElement("#root");

export default function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      firstName,
      secondName,
      phone,
      email,
      password,
    };
    createNewProfile(newProfile);
  };

  return (
    <div>
      <button
        className="btn btn-primary auth"
        onClick={() => setModalIsOpen(true)}
      >
        Signup
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className="d-flex justify-content-center">
          <p>Signup</p>
        </div>

        <form
          className="d-flex justify-content-center"
          onSubmit={handleFormSubmit}
        >
          <div className="wrapper">
            <div className="d-flex flex-row">
              <p className="name">Create a new Account</p>
              <button
                className="btn btn-primary"
                onClick={() => setModalIsOpen(false)}
              >
                x
              </button>
            </div>
            <p>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </p>

            <p>
              <label htmlFor="secondName">Last Name:</label>
              <input
                type="text"
                name="secondName"
                onChange={(e) => setSecondName(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>

            <p>
              <label htmlFor="password">Password:</label>
              <input
                type="number"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>

            <p>
              <label htmlFor="password">Check Password:</label>
              <input type="number" name="password" />
            </p>
            <p className="d-flex justify-content-center">
              <input
                className="btn btn-primary"
                type="submit"
                value="Create account"
              />
            </p>
          </div>
        </form>
      </Modal>
    </div>
  );
}
