import "./App.css";
import { Game } from "./data";
import { Board } from "./components/board";
import { Select } from "./components/select";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [n, setNumber] = useState(3);
  const [n2, setNumber2] = useState(4);
  let game= JSON.parse(localStorage.getItem("game")) || new Game(n).data;
  console.log("game")
  console.log(game)
  const [data, setData] = useState(game);
  const [finishStatus, setStatus] = useState(false);

  const newGame=()=>{
    setNumber(Number(n2))
    console.log(n2, n)
    setData(new Game(Number(n2)).data)
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
      /* data[3].number === sum(3) &&
        data[7].number === sum(7) &&
        data[11].number === sum(11) &&
        data[12].number === sum(12) &&
        data[13].number === sum(13) &&
        data[14].number === sum(14) */
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

  const getStyle=()=>{
    const a ="repeat(" +(Number(n)+1) +", 150px)"
    return {gridTemplateColumns: a}
  }

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
      console.log("cestitam")
    }
  }, [finishStatus]);

  useEffect(() => {
    localStorage.setItem("game", JSON.stringify(data))
    console.log(data)
    isItDone();
  }, [data]);

  return (
    <div className="App">    
      <Board sum={sum} changeState={changeState} getStyle={getStyle} n={n} data={data}></Board>
      <div style={finishStatus? {display: "flex"}: {display: "none"}}>
        <button onClick={() => newGame()}> Restart</button>
        <Select handleChange={setNumber2}></Select>
      </div>
    </div>
  );
}

export default App;
