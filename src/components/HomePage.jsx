import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
import { useAuth } from "../context/auth";

export default function HomePage() {
  const [name, setName] = useState(localStorage.getItem("firstName"));
  const [lastName, setLastName] = useState(localStorage.getItem("secondName"));
  const auth = useAuth();

  const setUserName = (userName, lastUserName) => {};
  const handleLogout = async () => {
    console.log(auth);
    await auth.removeToken();
  };
  return (
    <div>
      <div className="flexAuthorization">
        <Login />
        <Signup />
        <button className="btn btn-primary auth" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>

      <div className="textHomePage">
        {name && (
          <h1>
            Welcome {name} {lastName} to our amazing site
          </h1>
        )}
        {!name && <h1>Welcome to our amazing site </h1>}
        <p>This service will help you to find new pet.</p>
      </div>
    </div>
  );
}
