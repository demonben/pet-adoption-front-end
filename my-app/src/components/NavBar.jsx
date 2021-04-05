import React from "react";
import { BrowserRouter as  Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react"


export default function NavBar() {
  const [name, setName] = useState(localStorage.getItem("firstName"));
  useEffect(() => {
    // localStorage.getItem("firstName");

  }, [name]);

  return (
    <div>
      <ul>
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/myPets">
            My Pets Page
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/profile">
            Profile Settings
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/pets">
            Pets
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/addPet">
            Add New pet
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>
    </div>
  );
}
