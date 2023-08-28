import React from "react";
import "./TodoItem.css";

function TodoItem (props){
  return(
    <li className ='todoItem'>
     {/* <span
      className={`Icon ${props.completed && 'Icon-check--active'}`}
      onClick={props.onCompleted}
     >
        v
      </span> */}
      <i 
        className={`Icon Icon-active ${props.completed && 'Icon-check--active'} fa-solid fa-check-to-slot`}
        onClick={props.onCompleted}
      ></i>
      {/* <input type="checkbox"/> */}
      <p className={`${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <i className={`Icon Icon-delete  fa-solid fa-xmark`} onClick={props.onDeleted}></i>
      {/* <span 
        className="Icon Icon-delete"
        onClick={props.onDeleted}
      >
        X
      </span> */}
    </li>
  )
  
  
}

export { TodoItem };