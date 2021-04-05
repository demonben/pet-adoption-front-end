
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./components/HomePage"
import Signup from "./components/Signup"
import Login from './components/Login';
import SearchPage from './components/SearchPage';
import React, { useState } from 'react'
import MyPetsPage from './components/MyPetsPage';
import ProfileSettings from './components/ProfileSettings';
import PetPage from "./components/PetPage"
import Dashboard from './components/Dashboard';
import AddPet from './components/AddPet'



function App() {
  const [name, setName] = useState("")

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Router exact path="/">
            <HomePage />
          </Router>

          <Router path="/signup">
            <Signup />
          </Router>

          <Router path="/myPets">
            <MyPetsPage />
          </Router>

          <Router path="/search">
            <SearchPage />
          </Router>

          <Router path="/profile">
            <ProfileSettings />
          </Router>

          <Router path="/pets">
            <PetPage />
          </Router>

          <Router path="/addPet">
            <AddPet />
          </Router>

          <Router path="/dashboard">
            <Dashboard />
          </Router>
        </Switch>
      </Router>
      {/* <button
        className="btn btn-primary"
      >
        Logout
            </button> */}
    </div>
  );
}

export default App;
