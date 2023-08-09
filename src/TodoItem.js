import React from "react";
import "./TodoItem.css";

function TodoItem (props){
  return(
    <li className ='todoItem'>
     <span
      className={`Icon ${props.completed && 'Icon-check--active'}`}
      onClick={props.onCompleted}
     >
        v
      </span>
      {/* <input type="checkbox"/> */}
      <p className={`${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDeleted}
      >
        X
      </span>
    </li>
  )
  
  
}

export { TodoItem };