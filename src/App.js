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
import Dashboard from './components/dashboard/Dashboard';
import AddPet from './components/AddPet'
import { getAnimals, getUsers } from './lib/api';
import AuthProvider, { useAuth } from './context/auth';
import PetCard from './components/PetCard'

const AppRouter = () => {
  const { token } = useAuth();

  const [animals, setAddNewAnimal] = useState([]);
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAnimals().then(animals => {
      setAddNewAnimal(animals)
    })
    getUsers().then(users => {
      setUsers(users)
    })
  }, [])
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
      <NavBar />
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

        <Route path="/profile">
          <ProfileSettings />
        </Route>

        <Route path="/pets">
          {/* {!token && <Redirect to="login" />} */}
          <PetPage animals={animals} />
        </Route>

        <Route path="/addPet">
          <AddPet onNewAnimal={handleOnNewAnimal} />
        </Route>

        <Route path="/dashboard">
          <Dashboard animals={animals} users={users} onDeleteAnimal={onDeleteAnimal} onDeleteUser={onDeleteUser}/>
        </Route>

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
// function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.token ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }
