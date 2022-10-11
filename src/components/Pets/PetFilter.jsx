import React, { useState } from "react";

import styles from "./PetFilter.module.css";


import { Alert } from "@twilio-paste/core/alert";
import { Theme } from "@twilio-paste/core/theme";
import { Text } from "@twilio-paste/core/text";

const PetFilter = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }

  const dropdownSpeciesChangeHandler = (event) => {
    props.onChangeSpeciesFilter(event.target.value);
  };

  const dropdownGenderChangeHandler = (event) => {
    props.onChangeGenderFilter(event.target.value);
  };

  const dropdownAgeChangeHandler = (event) => {
    props.onChangeAgeFilter(event.target.value);
  };

  const searchChangeHandler = (event) => {
    props.onSearchChange(event.target.value);
  };

  const resetButtonHandler = () => {
    props.onChangeGenderFilter("Show All");
    props.onChangeAgeFilter("Show All");
    props.onChangeSpeciesFilter("Show All");
    props.onSearchChange("");
  };

  const dismiss = () => setIsOpen(false);

  return (
    <Theme.Provider theme="default">
      {/* <Card> */}
        <div className={styles.petFilter}>
          <div className={styles.petFilterFilter}>
            <input
              type="text"
              placeholder="Search by name or id..."
              value={props.search}
              onChange={searchChangeHandler}
            />
            <div>
              <label>Filter by Animal </label>
              <select
                value={props.selectedSpecies}
                onChange={dropdownSpeciesChangeHandler}
              >
                <option value="Show All">Show All</option>
                <option value="Cat">Cats</option>
                <option value="Dog">Dogs</option>
                <option value="Small Pet">Small Pets</option>
              </select>
            </div>
            <div>
              <label>Filter by Gender </label>
              <select
                value={props.selectedGender}
                onChange={dropdownGenderChangeHandler}
              >
                <option value="Show All">Show All</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div>
              <label>Filter by Age </label>
              <select
                value={props.selectedAge}
                onChange={dropdownAgeChangeHandler}
              >
                <option value="Show All">Show All</option>
                <option value="<1">-1 Year</option>
                <option value="1-3">1-3 Years</option>
                <option value="3+">3+ Years</option>
              </select>
            </div>
            <div>
              <button onClick={resetButtonHandler}>Reset Filters</button>
            </div>
          </div>
        </div>
      {/* </Card> */}
    </Theme.Provider>
  );
};

export default PetFilter;
