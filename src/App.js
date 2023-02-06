import { useState } from 'react';
import './app.scss';
import Calculator from './Calculator/Calculator';
import Todo from './Todo/Todo';

function c(string){
  console.log(string);
}

function App() {

const [active,setActive] = useState("Calculator");

const selectStuff = (e)=>{
  c(e.target.value)
  setActive(e.target.value)
}

  return ( 
    <>
       <div>
        <select onChange={selectStuff}>
          <option value="Calculator">Calculator</option>
          <option value="Todo">Todo</option>
          <option value="Ranking">Ranking</option>
        </select>
        {active === "Calculator" ? <Calculator/> : null}
        {active === "Todo" ? <Todo/> : null}
       </div>
    </>
    
  );
}

export default App;
