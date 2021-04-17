import React, { Component } from 'react'
import { useState } from "react";


export default function SearchPage () {
    const [toggle, setToggle]=useState(true)

    const advanceSearchHandler = ()=>{
if (toggle) {
  setToggle(false)
}else{setToggle(true)}
    }
        return (
          <div>
            <h1>Search Page</h1>
            <div className="input-group">
              <div className="form-outline">
                {/* <label className="form-label" for="form1"></label> */}
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Type of animal"
                />
              </div>
              <button
                type="button"
                id="form1"
                className=" button btn btn-primary"
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
