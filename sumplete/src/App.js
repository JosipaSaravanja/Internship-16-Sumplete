import "./App.css";
import { Game } from "./data";
import { Board } from "./components/board";
import { Select } from "./components/select";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [n, setNumber] = useState(3);
  let game= JSON.parse(localStorage.getItem("game")) || new Game(n).data;
  const [data, setData] = useState(game);
  const [finishStatus, setStatus] = useState(false);


  console.log(data)

  useEffect(() => {
    setData(new Game(n).data)
  }, [n]);
  
  const changeState = (id) => {
    setData((prev) => [
      ...prev.map((el, index) => {
        if (index === id) {
          return {
            number: el.number,
            isSolution: el.isSolution,
            state: handleState(el.state),
          };
        }

        return el;
      }),
    ]);
  };

  
  const handleState = (state) => {
    if (state === "") {
      return "×";
    } else if (state === "×") {
      return "o";
    } else if (state === "o") {
      return "";
    }
  };
  
  const getStyle=()=>{
    const a ="repeat(" +(Number(n)+1) +", 150px)"
    return {gridTemplateColumns: a}
  }

  return (
    <div className="App">    
      <Board changeState={changeState} getStyle={getStyle} n={n} data={data}></Board>
      <Select handleChange={setNumber}></Select>
    </div>
  );
}

export default App;
