import React, { useState } from "react";
import "./App.css";
import NavBar from "./Component/NavBar";
import User from "./Component/UserCard/UserCard";
import { Persons } from "./usersdata";

function App() {
  const [persondata, setPersondata] = useState(Persons);
  return (
    <div className="App">
      <NavBar />
      <User persondata={persondata} />
    </div>
  );
}

export default App;
