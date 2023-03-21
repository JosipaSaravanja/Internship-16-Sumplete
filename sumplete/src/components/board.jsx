import {NumberCell} from "./numberCell"
import {SumCell} from "./sumCell"

export const Board=(props)=>{
    const getColor=(id)=>{
      if(props.data[id].number===props.sum(id)){
          return "black"
      }else{
          return "gray"
      }
    }

  return (
    <div className="grid" style={props.getStyle()}>
        {props.data.map((data, index)=>{
            if(data.state!==undefined){
                return <NumberCell handleClick={props.changeState} data={data} id={index}></NumberCell>
            } else {
                return <SumCell getColor={getColor} sum={props.sum} data={data} id={index}></SumCell>
            }
        })}
    </div>
  );
}