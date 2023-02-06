import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './Todo.scss';

const Todoitem = (item)=>{


  return(
    <>
    <li>
      
    {item.item.desc}
      {item.item.status === true ? 
      <input type="checkbox" checked onChange={(e)=>{item.switch(item.item.id)}}/> : 
      <input type="checkbox" onChange={(e)=>{item.switch(item.item.id)}}/>
      } 
      <button onClick={(e)=>{item.delete(item.item.id)}}>Delete</button>
      </li>
    </>
  )
}

function Todo() {

const [desc,setDesc] = useState("");  
const [list,setList] = useState([])

const addTodo = (e)=>{
  e.preventDefault();
  const todo = {
    id: uuid(),
    desc: desc,
    status: false
  }
  setList([...list, todo])
}
const switchTodostate = (id)=>{
      const newList = [...list];
      const stuff = newList.find(
        item => item.id === id
      );
      stuff.status = !stuff.status
      setList(newList);
}
const deleteTodo = (id)=>{
      setList(list.filter(item=> item.id !== id));
}
  return (
    <div className='TodoList'>Todo
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          name='desc'
          value={desc || ''} 
          onChange={(e)=>{setDesc(e.target.value)}}
          placeholder='Description...'/>
        <input type="submit"/>
      </form>
      <ul>
        {list.length !== 0 ? list.map((item)=>(<Todoitem item={item} switch={switchTodostate} delete={deleteTodo}/>)) : null}

        </ul>
    </div>
  )
}

export default Todo