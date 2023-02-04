import React from 'react';
import { useState } from 'react';
import './Todo.scss';


function Todo() {

const [desc,setDesc] = useState("");  
const [list,setList] = useState([])

const addTodo = (e)=>{
  e.preventDefault();
  const todo = {
    desc: desc,
    status: false
  }
  setList([...list, todo])
}

  return (
    <div className='TodoList'>Todo
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          name='desc'
          value={desc} 
          onChange={(e)=>{setDesc(e.target.value)}}
          placeholder='Description...'/>
        <input type="submit"/>
      </form>
      <ul>
        { list.length !== 0 ? list.map((item)=>(
          <>
          <li>
                {item.desc}
                {item.status === true ? 
                  <input type="checkbox" checked onChange={()=>{console.log("checked")}}/> : 
                  <input type="checkbox" onChange={()=>{console.log("that was not checked")}}/>
                } 
                </li>  
          </>
        )) : null}

        </ul>
    </div>
  )
}

export default Todo