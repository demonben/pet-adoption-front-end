import React from "react";
import { useState, useEffect } from "react";

export default function ProfileSettings() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setup = (e) => {
    e.preventDefault();
    console.log("gj");
  };
  return (
    <div>
      <h1>Profile Settings</h1>
      <form onSubmit={setup}>
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
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          type="text"
          name="bio"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
