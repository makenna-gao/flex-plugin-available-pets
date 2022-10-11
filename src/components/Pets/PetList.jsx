import React, { useState } from "react";


import styles from "./PetList.module.css";

import Pet from "./Pet";
import PetFilter from "./PetFilter";

import { Alert } from "@twilio-paste/core/alert";
import { Theme } from "@twilio-paste/core/theme";
import { Text } from "@twilio-paste/core/text";

const pets = [
    {
      id: "5798",
      name: "Ginger",
      gender: "Female",
      species: "Cat",
      breed: "Domestic Shorthair",
      age: 1,
      date: new Date(2020, 7, 14),
      available: false,
    },
    {
      id: "3983",
      name: "Olly",
      gender: "Male",
      species: "Cat",
      breed: "Domestic Shorthair",
      age: .5,
      date: new Date(2021, 2, 28),
      available: true,
    },
    {
      id: "3498",
      name: "Pepper",
      gender: "Female",
      species: "Dog",
      breed: "Chiweenie",
      age: 3,
      date: new Date(2021, 5, 12),
      available: true,
    },
    {
      id: "3499",
      name: "Cece",
      gender: "Female",
      species: "Cat",
      breed: "Siamese",
      age: 3,
      date: new Date(2021, 5, 12),
      available: true,
    },
    {
      id: "7842",
      name: "Molly",
      gender: "Female",
      species: "Dog",
      breed: "Cavapoo",
      age: 10,
      date: new Date(2021, 5, 12),
      available: true,
    },
    {
      id: "3278",
      name: "Bella",
      gender: "Female",
      species: "Dog",
      breed: "Chihuahua",
      age: 4,
      date: new Date(2021, 5, 12),
      available: true,
    },
    {
      id: "3598",
      name: "Baxter",
      gender: "Male",
      species: "Small Pet",
      age: 4,
      date: new Date(2021, 5, 12),
      available: true,
    },
  ];

const PetList = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }

  const [selectedSpecies, setSelectedSpecies] = useState("Show All");
  const [selectedGender, setSelectedGender] = useState("Show All");
  const [selectedAge, setSelectedAge] = useState("Show All");
  const [search, setSearch] = useState("");

  const onChangeSpeciesFilter = (species) => {
    setSelectedSpecies(species);
  };

  const onChangeGenderFilter = (gender) => {
    setSelectedGender(gender);
  };

  const onChangeAgeFilter = (age) => {
    setSelectedAge(age);
  };

  const onSearchChange = (text) => {
    setSearch(text);
    console.log(text);
  };

  let filteredPets = "";

  if (
    selectedSpecies === "Show All" &&
    selectedGender === "Show All" &&
    selectedAge === "Show All" &&
    search.trim().length <= 0
  ) {
    filteredPets = pets;
  } else {
    filteredPets = pets.filter((pet) => {
      return (
        (search.trim().length > 0
          ? pet.name.toLowerCase().includes(search.toLowerCase()) ||
            pet.id.includes(search)
          : true) &&
        (selectedSpecies !== "Show All"
          ? pet.species === selectedSpecies
          : true) &&
        (selectedGender !== "Show All"
          ? pet.gender === selectedGender
          : true) &&
        (selectedAge === "<1" ? pet.age < 1 : true) &&
        (selectedAge === "1-3" ? pet.age >= 1 && pet.age <= 3 : true) &&
        (selectedAge === "3+" ? pet.age > 3 : true)
      );
    });
  }

  const dismiss = () => setIsOpen(false);

  return (
    <Theme.Provider theme="default">
      <div>
        {/* <Card className={styles.pets}> */}
          <br/>
          <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}>Available Pets</h1>
          <br/>
          <PetFilter
            selectedSpecies={selectedSpecies}
            onChangeSpeciesFilter={onChangeSpeciesFilter}
            selectedGender={selectedGender}
            onChangeGenderFilter={onChangeGenderFilter}
            selectedAge={selectedAge}
            onChangeAgeFilter={onChangeAgeFilter}
            search={search}
            onSearchChange={onSearchChange}
          />
          {filteredPets.length === 0 ? <p>No results found.</p> : ""}
          {filteredPets.map((pet) => (
            <Pet
              id={pet.id}
              name={pet.name}
              species={pet.species}
              age={pet.age}
              available={pet.available}
            />
          ))}
        {/* </Card> */}
      </div>
    </Theme.Provider>
  );
};

export default PetList;
