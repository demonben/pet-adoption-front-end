import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // console.log(props.func("zzzzzzz"))

  const signup = (e) => {
    e.preventDefault();
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("secondName", secondName);
    props.func(firstName, secondName);
  };
const handleCloseModal = ()=>{
  setModalIsOpen(false)
}
  // props.func.
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Signup</button>
      <Modal isOpen={modalIsOpen} onRequestClose={()=>handleCloseModal()}>
        <p>Signup</p>
        <form onSubmit={signup}>
          <p>Create a new Account</p>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="secondName">Last Name:</label>
          <input
            type="text"
            name="secondName"
            onChange={(e) => setSecondName(e.target.value)}
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />

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

          <label htmlFor="password">Check Password:</label>
          <input type="number" name="password" />
          <p>
            <input
              className="btn btn-primary"
              type="submit"
              value="Create account"
            />
          </p>
        </form>
        <button onClick={() => setModalIsOpen(false)}>close modal</button>
      </Modal>
    </div>
  );
}
