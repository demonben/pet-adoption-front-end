import React from "react";
import { BrowserRouter as Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar() {
  const [name, setName] = useState(localStorage.getItem("firstName"));
  useEffect(() => {
    // localStorage.getItem("firstName");
  }, [name]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand>Home</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link className="nav-item" href="/">
            Home
          </Nav.Link>

          <Nav.Link className="nav-item" href="/search">
            Search
          </Nav.Link>

          <Nav.Link className="nav-item" href="/myPets">
            My Pet Page
          </Nav.Link>

          <Nav.Link className="nav-item" href="/profile">
            Profile Settings
          </Nav.Link>

          <Nav.Link className="nav-item" href="/pets">
            Pets
          </Nav.Link>

          <Nav.Link className="nav-item" href="/addPet">
            Add New pet
          </Nav.Link>

          <Nav.Link className="nav-item" href="/dashboard">
            Dashboard
          </Nav.Link>
        </Nav>
        <Form inline></Form>
      </Navbar>
    </>
  );
}

// {
//   /* <div className="navContainer">
//         <Navbar bg="dark" variant="dark">

//           <ul className="navList ">
//             <li>
//               <Link className="nav-item" to="/">
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link className="nav-item" to="/search">
//                 Search
//               </Link>
//             </li>

//             <li>
//               <Link className="nav-item" to="/myPets">
//                 My Pets Page
//               </Link>
//             </li>

//             <li>
//               <Link className="nav-item" to="/profile">
//                 Profile Settings
//               </Link>
//             </li>

//             <li>
//               <Link className="nav-item" to="/pets">
//                 Pets
//               </Link>
//             </li>

//             <li>
//               <Link className="nav-item" to="/addPet">
//                 Add New pet
//               </Link>
//             </li>

//             <li>
//               <Link className="nav-item" to="/dashboard">
//                 Dashboard
//               </Link>
//             </li>
//           </ul>
//         </Navbar>
//       </div> */
// }
// {
// /* </div> */
// }
