import React, {useState} from "react";
import {Hello} from "./Hello.js";
import './App.css';

function App() {
  let[count, setCount] = useState(1);
  let[isMorning, setNight]= useState(true);
  return (
    <div className= {"box ${isMorning ? "dayLight": ""} "}>
    <h2>Day Time= {isMorning ? "Morning" : "Night"} </h2>
      <Hello counter={count} />
      <br/>
      <button onClick={()=> setCount(++count)}> Update Counter</button>

      <button onClick={()=>isMorning(!isMorning)}> Update Day</button>
    </div>
  );
}

export default App;
