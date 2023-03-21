import "./App.css";
import { Game } from "./data";
import { Select } from "./components/select";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [n, setNumber] = useState(3);
  let newGame= JSON.parse(localStorage.getItem("game")) || new Game(n).data;
  const [data, setData] = useState(newGame);
console.log(data)
  useEffect(() => {
    setData(new Game(n).data)
  },  [n]);

  return (
    <div className="App">
      <div className="newGame">
        <Select handleChange={setNumber}></Select>
      </div>
    </div>
  );
}

export default App;
