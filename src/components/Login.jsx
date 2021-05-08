import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { logIn } from "../lib/api";
import { useAuth } from "../context/auth";

Modal.setAppElement("#root");

export default function Login() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if ((email, password)) {
      try {
        console.log(email);
        console.log(password);
        const { token} = await logIn(email, password);
        console.log("login successfully");

        await auth.saveToken(token);
      } catch (err) {
        console.log(err);
        alert("bad username and password");
      }
    }
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <button
        className="btn btn-primary auth"
        onClick={() => setModalIsOpen(true)}
      >
        Login
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => handleCloseModal()}>
        <p>Login</p>

        <form onSubmit={handleFormSubmit}>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>

          <label htmlFor="password">Password:</label>
          <input
            value={password}
            type="text"
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
