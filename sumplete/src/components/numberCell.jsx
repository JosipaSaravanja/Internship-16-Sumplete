import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

export const NumberCell = (props) => {
  const[name, setName]=useState("number-cell");

  useEffect(() => {
    if(props.data.state===""){
      setName("number-cell")
    } else if(props.data.state==="×"){
      setName("solution")
    } else if(props.data.state==="o"){
      setName("notSolution")
    }
  }, [[props.data.state]]);
  
  return <div onClick={()=>props.handleClick(props.id)} className={name}>
    {props.data.number}
    </div>;
};
