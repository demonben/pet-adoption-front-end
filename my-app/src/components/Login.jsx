import React, { Component } from "react";
import Modal from "react-modal";
import { useState, useEffect } from "react";

Modal.setAppElement("#root");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const login = (e)=>{
    e.preventDefault();
    console.log("gj");

  }

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Login</button>
      <Modal isOpen={modalIsOpen}>
        <p>Login</p>
        <form onSubmit={login}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="number"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        </form>
        <button onClick={() => setModalIsOpen(false)}>close modal</button>
      </Modal>
    </div>
  );
}
