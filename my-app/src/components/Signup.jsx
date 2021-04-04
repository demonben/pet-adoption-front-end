import React, { useState } from 'react'

export default function Signup() {
  const [firstName,setFirstName]=useState('');
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const signup = (e) =>{
  e.preventDefault();
console.log(firstName);
}

  return (
    <div>
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
        <input type="email" name="secondName" />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" name="phone" />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="number" name="password" />

        <label htmlFor="password">Check Password:</label>
        <input type="number" name="password" />

        <input type="submit" value="Create account" />
      </form>
    </div>
  );
}
