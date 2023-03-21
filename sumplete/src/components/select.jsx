export const Select=(props)=>{
  return (
    <select onChange={(e)=>props.handleChange(e.target.value)}>
        <option selected disabled>Nova igra</option>
        <option value="3" >3×3</option>
        <option value="4">4×4</option>
        <option value="5">5×5</option>
    </select>
  );
}

