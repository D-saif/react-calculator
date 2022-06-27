import "./App.css"
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState('');
  const [res, setRes] = useState('');
  const ops = ["+" , "-" , "." , "*" , "/"]
  const updateCalc = value => {
    if(
      ops.includes(value) && calc == '' || ops.includes(value) && ops.includes(calc.slice(-1))
    ){return;}

    setCalc(calc+value);

    if(!ops.includes(value)){
      setRes(eval(calc+value).toString());
    }
  }

  const deleteLast = ()=>{
    if(calc != ""){
      setCalc(calc.slice(0,-1));
      //const value = calc.slice(0,-1);
      //setCalc(value);
    }
  }

  const digits = Array.from({length: 9},(_,i)=> <button key={i} onClick={()=>updateCalc((i+1).toString())}>{i+1}</button>);
  //const createDigits = ()=>{
  //  let digits = [];
  //    for (let i = 1; i < 10; i++) {
  //      digits.push();
  //    
  //     }
  //  return digits;
  //}
  return (
    <div className="App">
      
      <div className="calculator">
        <div className="display">
          {calc ? <span>({calc})</span> : ""}&nbsp;{res || "0"}
        </div>
        <div className="operators">
          <button onClick={()=>updateCalc("/")}>/</button>
          <button onClick={()=>updateCalc("*")}>*</button>
          <button onClick={()=>updateCalc("+")}>+</button>
          <button onClick={()=>updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          { digits }
          <button onClick={()=>updateCalc("0")}>0</button>
          <button onClick={()=>updateCalc(".")}>.</button>
          <button onClick={()=>setCalc(res)}>=</button>
        </div>

      </div>
    </div>
  )
}

export default App;
