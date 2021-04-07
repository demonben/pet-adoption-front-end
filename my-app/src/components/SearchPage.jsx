import React, { Component } from 'react'
import { useState, useEffect } from "react";


export default function SearchPage () {
    const [toggle, setToggle]=useState(true)

        return (
          <div>
            <h1>Search Page</h1>
            <div class="input-group">
              <div class="form-outline">
                <label class="form-label" for="form1">
                  Type of animal
                </label>
                <input type="search" id="form1" class="form-control" />
              </div>
              <button type="button" class="btn btn-primary">
                Search
                <i class="fas fa-search"></i>
              </button>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => setToggle(false)}
            >
              advance
              <i class="fas fa-search"></i>
            </button>

            {!toggle && <p>advanced search</p>}
            {/* Can search based on Adoption Status, Height, Weight, Type, Name */}
          </div>
        );
    
}
