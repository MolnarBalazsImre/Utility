import './CalculatorStyle.scss';
import { useState } from "react";

const Calculator = ()=>{
//nc -> numbercontainer
const [nc,setNc] = useState("");
//DRAG
const summ = (nc)=>{
    var result = Function("return "+nc)()
    setNc(result)
}
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
const setNewNumber = (string)=>{
    
       setNc(`${nc}${string}`)
    
}

return(
    <>
    <div className="CalculatorContainer">
       <p>Calculator</p>
        <input type="text" onChange={(e)=>{setNc(e.target.value)}} value={nc}/>
        <table>
            <tbody>
            <tr>
                <th><button onClick={()=>{setNewNumber('1')}}>1</button></th>
                <th><button onClick={()=>{setNewNumber('2')}}>2</button></th>
                <th><button onClick={()=>{setNewNumber('3')}}>3</button></th>
                <th><button onClick={()=>{summ(nc)}}>SUM</button></th>
            </tr>
            <tr>
                <th><button onClick={()=>{setNewNumber('4')}}>4</button></th>
                <th><button onClick={()=>{setNewNumber('5')}}>5</button></th>
                <th><button onClick={()=>{setNewNumber('6')}}>6</button></th>
                <th><button onClick={()=>{setNewNumber('-')}}>-</button></th>
            </tr>
            <tr>
                <th><button onClick={()=>{setNewNumber('7')}}>7</button></th>
                <th><button onClick={()=>{setNewNumber('8')}}>8</button></th>
                <th><button onClick={()=>{setNewNumber('9')}}>9</button></th>
                <th><button onClick={()=>{setNewNumber('*')}}>*</button></th>
            </tr>
            <tr>
                <th><button onClick={()=>{setNewNumber('0')}}>0</button></th>
                <th><button onClick={()=>{setNewNumber('/')}}>/</button></th>
                <th><button onClick={()=>{setNewNumber('+')}}>+</button></th>
                <th><button onClick={()=>{setNc("")}}>Clear</button></th> 
            </tr>
            </tbody>
        </table>
    </div>
    </>
)
}

export default Calculator;