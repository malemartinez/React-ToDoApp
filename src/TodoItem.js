import React from "react";
import "./TodoItem.css";

function TodoItem (props){
// manejo de eventos
  const onCompleted = ()=>{
    alert('ya completaste el to-do '+ props.text)
  }
  const onDeleted = ()=>{
    alert('eliminaste el to-do '+ props.text)
  }


  return(
    <li className ='todoItem'>
     <span
      className={`Icon ${props.completed && 'Icon-check--active'}`}
      onClick={onCompleted}
     >
        v
      </span>
      {/* <input type="checkbox"/> */}
      <p className={`${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={onDeleted}
      >
        X
      </span>
    </li>
  )
  
  
}

export { TodoItem };