import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

export const SumCell = (props) => {
  const [color, setColor]=useState("black")
  
  let color1="sum-cell " +color;
  
  useEffect(() => {
    if(props.data.number===props.sum(props.id)){
        setColor("black")
    }else{
        setColor("gray")
    }
  }, [[props.data.state]]);

  return <div className={color1}>
    {props.data.number}
    </div>;
};



