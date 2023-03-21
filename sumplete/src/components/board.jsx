import {NumberCell} from "./numberCell"
import {SumCell} from "./sumCell"
let n =4;

export const Board=(props)=>{
  return (
    <div className="grid" style={props.getStyle()}>
        {props.data.map((data, index)=>{
            if(data.state!==undefined){
                return <NumberCell handleClick={props.changeState} data={data} id={index}></NumberCell>
            } else {
                return <SumCell sum={props.sum} data={data} id={index}></SumCell>
            }
        })}
    </div>
  );
}

