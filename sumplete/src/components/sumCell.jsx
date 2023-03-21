import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

export const SumCell = (props) => {
  const [color, setColor]=useState("black")
  
  let color1="sum-cell " +props.getColor(props.id);
  


  return <div className={color1}>
    {props.data.number}
    </div>;
};