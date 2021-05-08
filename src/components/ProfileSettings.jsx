import React, { useEffect } from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import localforage from "localforage";
import { getUserById, changeUser } from "../lib/api";
import { useAuth } from "../context/auth";

export default function ProfileSettings() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storage, setStorage] = useState("");
  const [userId, setUserId] = useState("");
  const auth = useAuth();

  useEffect(() => {
    localforage.getItem("userToken").then((res) => {
      setStorage(res);
    });

    if (storage) {
      const decoded = jwt_decode(storage);
      setUserId(decoded.id);
    }
    if (storage && userId) {
      getUserById(userId, auth.token).then((data) => {
        setFirstName(data.user.first_name);
        setSecondName(data.user.last_name);
        setPhone(data.user.phone_number);
        setEmail(data.user.mail);
        // setPassword(data.user.);

        console.log(data.user.first_name);
      });
    }
  }, [auth.token, userId]);

  const setup = (e) => {
    e.preventDefault();
    console.log(userId);
    const userNewInfo = {
      firstName,
      secondName,
      phone,
      email,
    };
    changeUser(userNewInfo, userId, auth.token);
  };

  // console.log("userId", userId);

  return (
    <div>
      <h1>Profile Settings</h1>
      <form onSubmit={setup}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p>
          <label htmlFor="secondName">Last Name:</label>
          <input
            type="text"
            name="secondName"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>

        <label htmlFor="bio">Bio</label>
        <textarea
          type="text"
          name="bio"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <input className="btn btn-primary" type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
}
