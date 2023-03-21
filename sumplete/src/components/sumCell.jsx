import React from 'react';

export const SumCell = (props) => {
  return <div className={"sum-cell " +props.getColor(props.id)}>
    {props.data.number}
    </div>;
};