import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import Signup from "./components/Signup"
import SearchPage from './components/search/SearchPage';
import React, { useState, useEffect } from 'react'
import MyPetsPage from './components/myPetPage/MyPetsPage';
import ProfileSettings from './components/ProfileSettings';
import PetPage from "./components/PetPage"
import Dashboard from './components/dashboard/Dashboard';
import AddPet from './components/AddPet'
import { getAnimals, getUsers } from './lib/api';
import AuthProvider, { useAuth } from './context/auth';
import PetCard from './components/PetCard'
import jwt_decode from "jwt-decode";



const AppRouter = () => {
  const { token } = useAuth();
  const [animals, setAddNewAnimal] = useState([]);
  const [users, setUsers] = useState([])
  const [userId,setUserId]=useState('')

  useEffect(() => {
    getAnimals().then(animals => {
      setAddNewAnimal(animals)
    })
    getUsers().then(users => {
      setUsers(users)
    })
  }, [])

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      setUserId(decoded.id)
    }
  }, [token]);

  const isAdmin = userId === '47fa040a-f2ab-488b-9083-d6c46f7b42b0'
  const isLogin = userId

  console.log("is admin",isAdmin)
  const onDeleteAnimal = (animalIndex) => {
    setAddNewAnimal(prevAnimals => {
      const left = prevAnimals.slice(0, animalIndex);
      const right = prevAnimals.slice(animalIndex + 1);
      return [...left, ...right];
    })
  }
  const handleOnNewAnimal = (newAnimal) => {
    setAddNewAnimal(prevAnimals => [...prevAnimals, newAnimal])
  }
  const onDeleteUser = (userIndex) => { 
    setUsers(prevUsers => {
      const left = prevUsers.slice(0, userIndex);
      const right = prevUsers.slice(userIndex + 1);
      return [...left, ...right];
    })
  }

  return (
    <Router>
      <NavBar isAdmin={isAdmin} isLogin={isLogin}/>
      <Switch>
        
        <Route exact path="/">
          <HomePage users={users} />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/myPets">
          <MyPetsPage />
        </Route>

        <Route path="/search">
          <SearchPage />
        </Route>

        {isLogin &&
        <Route path="/profile">
          <ProfileSettings />
        </Route>
        }

        <Route path="/pets">
          <PetPage animals={animals} />
        </Route>

        <Route path="/addPet">
          <AddPet onNewAnimal={handleOnNewAnimal} />
        </Route>

        {isAdmin && <Route path="/dashboard">
          <Dashboard animals={animals} users={users} onDeleteAnimal={onDeleteAnimal} onDeleteUser={onDeleteUser} />
        </Route>}
        

        <Route path="/pet/:animalId">
          <PetCard />
        </Route>
      </Switch>
    </Router>
  )
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppRouter />
      </div>
    </AuthProvider>
  );
}

export default App;

