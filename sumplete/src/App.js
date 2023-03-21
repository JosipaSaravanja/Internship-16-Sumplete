import "./App.css";
import { Game } from "./data";
import { Board } from "./components/board";
import { Select } from "./components/select";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [n, setNumber] = useState(localStorage.getItem("game") ? Math.sqrt(JSON.parse(localStorage.getItem("game")).length+1)-1 : 3);
  const [tempNum, setTempNum] = useState();
  const [data, setData] = useState(JSON.parse(localStorage.getItem("game")) || new Game(n).data);
  const [finishStatus, setStatus] = useState(false);

  const newGame=()=>{
    setNumber(Number(tempNum))
    console.log(tempNum, n)
    setData(new Game(Number(tempNum)).data)
  }
   
  const Restart=()=>{
    setData((prev) => [
      ...prev.map(el=> {
          return {
            number: el.number,
            isSolution: el.isSolution,
            state: el.state!==undefined ? "" : undefined,
          };
      }),
    ]);
  }

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

  const isItDone = () => {
    console.log(data)
    let status=false;
    setStatus(status)
    const num=Number(n);
    for(let i=0; i<num; i++){
      status=data[(num+1)*i+num].number===sum((num+1)*i+num )
      if(status===false){
        return
      }
      if(i==num-1)
      {
        for(let j=1; j<=num; j++){
        status=data[(num+1)*i+num+j].number===sum((num+1)*i+num+j)
        if(status===false){
          return
        }
        }
      }
    }
    setStatus(
      status
    );
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

  const sum = (index) => {
    let sum = 0;
    if (index % (n+1) == n) {
      for (let i = 1; i <= n; i++) {
        let el = data[index - i];
        if (el.state != "×") {
          sum += el.number;
        }
      }
    } else if (index >=n*(n+1)) {
      for (let i = 1; i <= n; i++) {
        let el = data[index - i * (n+1)];
        if (el.state != "×") {
          sum += el.number;
        }
      }
    }
    return sum;
  };

  useEffect(() => {
    if(finishStatus){
      setData((prev) => [
      ...prev.map(el=> {
        if(el.isSolution){
          el.state="o"
        }else if(el.isSolution===false){
          el.state="×"
        }
          return {
            number: el.number,
            isSolution: el.isSolution,
            state: el.state,
          };
      }),
    ]);
    }
  }, [finishStatus]);

  useEffect(() => {
    localStorage.setItem("game", JSON.stringify(data))
    console.log(data)
    isItDone();
  }, [data]);



  return (
    <div className="App">    
      <Board sum={sum} changeState={changeState} n={n} data={data}></Board>
      <div className="buttons">
        <button onClick={() => Restart()}>Restart</button>
        <div style={finishStatus? {display: "flex"}: {display: "none"}}>
          <button onClick={() => newGame()}>New Game</button>
          <Select handleChange={setTempNum}></Select>
        </div>
      </div>
    </div>
  );
}

export default App;
