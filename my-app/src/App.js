
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import Signup from "./components/Signup"
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Router exact path="/">
            <HomePage/>
          </Router>
          <Router path="/signup">
            <Signup/>
          </Router>
          <Router path="/login">
            <Login/>
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
