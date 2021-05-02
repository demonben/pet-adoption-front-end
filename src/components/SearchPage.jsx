import React, { Component } from "react";
import { useState } from "react";
import { searchAnimalByType } from "../lib/api";
import { useAuth } from "../context/auth";

export default function SearchPage() {
  const auth = useAuth();
  const [toggle, setToggle] = useState(true);
  const [simpleSearch, setSimpleSearch] = useState("");
  const [type, setType] = useState("");

  const advanceSearchHandler = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  const searchHandler = () => {
    console.log(type, auth);
    searchAnimalByType(type, auth.token);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <div className="input-group">
        <div className="form-outline">
          {/* <label className="form-label" for="form1"></label> */}
          <input
            type="search"
            className="form-control"
            placeholder="Type of animal"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <button
          type="button"
          id="form1"
          className=" button btn btn-primary"
          onClick={() => searchHandler()}
        >
          Search
          <i className="fas fa-search"></i>
        </button>
      </div>
      <button
        type="button"
        className=" btn btn-primary"
        onClick={() => advanceSearchHandler()}
      >
        advance
        <i className="fas fa-search"></i>
      </button>

      {!toggle && <p>advanced search</p>}
      {/* Can search based on Adoption Status, Height, Weight, Type, Name */}
    </div>
  );
}
