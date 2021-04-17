import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";


export default function HomePage() {
  const [name, setName] = useState(localStorage.getItem("firstName"));
  const [lastName, setLastName] = useState(localStorage.getItem("secondName"));

  const setUserName = (userName,lastUserName) => {
    setName(userName)
    setLastName(lastUserName);
  }

  return (
    <div>
      <Login />
      <Signup func={setUserName} />
      {name && (
        <h1>
          Welcome {name} {lastName} to our amazing site
        </h1>
      )}
      {!name && <h1>Welcome to our amazing site </h1>}
      <p>This service will help you to find new pet.</p>
      <button className="btn btn-primary" onClick={() => setName("")}>
        Logout
      </button>
    </div>
  );
}
