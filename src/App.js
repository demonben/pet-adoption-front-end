import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
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
import AuthProvider, { useAuth } from './context/auth';

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const AppRouter = () => {
  const { token } = useAuth();

  const [animals, setAddNewAnimal] = useState([]);

  useEffect(() => {
    getAnimals().then(animals => {
      setAddNewAnimal(animals)
    })
  }, [])

  const handleOnNewAnimal = (newAnimal) => {
    setAddNewAnimal(prevAnimals => [...prevAnimals, newAnimal])
  }
  return (
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
          {!token && <Redirect to="login"/>}
          <PetPage animals={animals} />
        </Router>

        <Router path="/addPet">
          <AddPet onNewAnimal={handleOnNewAnimal} />
        </Router>

        <Router path="/dashboard">
          <Dashboard />
        </Router>
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
