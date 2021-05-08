import React, { useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
import { useAuth } from "../context/auth";
import jwt_decode from "jwt-decode";
import localforage from "localforage";

export default function HomePage() {
  const [name, setName] = useState(localStorage.getItem("firstName"));
  const [lastName, setLastName] = useState(localStorage.getItem("secondName"));
  const [storage, setStorage] = useState("");
  const auth = useAuth();

  useEffect(() => {
    localforage.getItem("userToken").then((res) => {
      setStorage(res);
    });
    if (storage) {
      const decoded = jwt_decode(storage);
      setName(decoded.name);
      setLastName(decoded.lastName);
      // console.log("storage",storage);
      // console.log(lastName);
    }
  }, [storage, name, lastName]);

  const handleLogout = async () => {
    await auth.removeToken();
  };
  return (
    <div>
      <div className="flexAuthorization">
        {auth.token && (
          <button
            className="btn btn-primary auth"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        )}
        {!auth.token && (
          <>
            <Login />
            <Signup />
          </>
        )}
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
