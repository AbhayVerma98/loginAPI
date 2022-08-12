import React,{useEffect, useState} from 'react'

const Form = () => {
    const [value, setValue] = useState('select');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    useEffect(()=>{
      
  },[value])
  
    return (
      <div>
        <center>
        <label>
          Select an option<br/>
          <select value={value} className="form-control" onChange={handleChange}>
            <option value="select">--select--</option>
            <option value="Head">Head</option>
            <option value="Tail">Tail</option>
          </select>
        </label>   
        <br/> <br/>    
        <button type="button" className="btn btn-primary" onClick={()=>{if(value==="select"){return alert("Error :  please select any option")}}}>submit</button>
        <p>selecter option is {value}!</p>
        </center>
      </div>
    );
}

export default Form