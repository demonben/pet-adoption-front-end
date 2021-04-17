
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./components/HomePage"
import Signup from "./components/Signup"
import Login from './components/Login';
import SearchPage from './components/SearchPage';
import React, { useState, useEffect } from 'react'
import MyPetsPage from './components/MyPetsPage';
import ProfileSettings from './components/ProfileSettings';
import PetPage from "./components/PetPage"
import Dashboard from './components/Dashboard';
import AddPet from './components/AddPet'
import { getAnimals } from './lib/api';

// const mockAnimal = [
//   {
//     id: 1234, nameAnimal:"Bobik",
//     species:"dog", dateCreated: Date.now()},
// {
//   id: 12234234, nameAnimal:"Marusya",
//     species:"cat", dateCreated: Date.now()
// },
// {
//   id: 1254334534, nameAnimal: "CatAndDog",
//     species:"catAndDog", dateCreated: Date.now()
// }
// ]

function App() {
  // const [nameUser, setName] = useState('')

  const [animals, setAddNewAnimal] = useState([]);

  useEffect(() => {
   getAnimals().then(animals =>{
     setAddNewAnimal(animals)
   })
  }, [])

  const handleOnNewAnimal = (newAnimal) =>{
    setAddNewAnimal(prevAnimals => [...prevAnimals, newAnimal])
  }

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
            <PetPage animals={animals} />
          </Router>

          <Router path="/addPet">
            <AddPet onNewAnimal={handleOnNewAnimal}/>
          </Router>

          <Router path="/dashboard">
            <Dashboard />
          </Router>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
