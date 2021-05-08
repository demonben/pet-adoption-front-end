import React from "react";
import { useState } from "react";
import { searchAnimalByType } from "../../lib/api";
import { useAuth } from "../../context/auth";
import { SearchAnimalsList } from "./SearchAnimalsList";

export default function SearchPage() {
  const auth = useAuth();
  const [toggle, setToggle] = useState(true);
  const [simpleSearch, setSimpleSearch] = useState([]);
  const [type, setType] = useState("");

  const advanceSearchToggle = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  const searchHandler = async() => {
   const searchData = await searchAnimalByType(type, auth.token);
   console.log(searchData);
   setSimpleSearch(searchData);
  };

  const advanceSearchHandler = ()=>{

  }

  return (
    <div>
      <h1>Search Page</h1>
      <div className="input-group">
        <div className="form-outline">
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
          className=" button btn btn-primary searchButton"
          onClick={() => searchHandler()}
        >
          Search
        </button>
      </div>
      <button
        type="button"
        className=" btn btn-primary"
        onClick={() => advanceSearchToggle()}
      >
        Advance
        <i className="fas fa-search"></i>
      </button>

      {!toggle && (
        <div>
          <div className="form-outline">
            <input
              type="search"
              className="form-control"
              placeholder="name of animal"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>

          <div className="form-outline">
            <input
              type="search"
              className="form-control"
              placeholder="Adoption Status"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>

          <div className="form-outline">
            <input
              type="number"
              className="form-control"
              placeholder="max weight"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>

          <div className="form-outline">
            <input
              type="number"
              className="form-control"
              placeholder="max height"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
      )}
      <div>
        <button
          type="button"
          className=" btn btn-primary searchButton"
          onClick={() => advanceSearchHandler()}
        >
          search
        </button>
      </div>
      {/* Can search based on Adoption Status, Height, Weight, Type, Name */}
      <div>
        <SearchAnimalsList simpleSearch={simpleSearch} />
      </div>
    </div>
  );
}
