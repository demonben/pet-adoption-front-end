import React, { Component } from "react";
import Modal from "react-modal";
import { useState, useEffect } from "react";

Modal.setAppElement("#root");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const login = (e) => {
    e.preventDefault();
    console.log("gj");
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={() => setModalIsOpen(true)}>
        Login
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => handleCloseModal()}>
        <p>Login</p>

        <form onSubmit={login}>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>

          <label htmlFor="password">Password:</label>
          <input
            type="number"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
        <button
          className="btn btn-primary"
          onClick={() => setModalIsOpen(false)}
        >
          close modal
        </button>
      </Modal>
    </div>
  );
}
