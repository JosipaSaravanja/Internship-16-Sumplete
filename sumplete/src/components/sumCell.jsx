import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

export const SumCell = (props) => {
  const [color, setColor]=useState("black")
  let color1="sum-cell " +color;
  
  return <div className={color1}>
    {props.data.number}
    </div>;
};
