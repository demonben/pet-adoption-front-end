import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/signup">Signup</Link>
        </li>
        <li>
          <Link className="nav-item" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
