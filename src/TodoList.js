import React from "react";
// import { TodoItem } from "./TodoItem";
import "./TodoList.css"

// const ToDos = [
//   {
//     text: 'Hacer el almuerzo', 
//     completed:true
//   },
//   {
//     text: 'Ir al medico', 
//     completed:false
//   },
//   {
//     text: 'Pagar factura luz', 
//     completed:true
//   }
// ]

function TodoList (props){
  return(
    <section className='section-container'>
      <ul className='list-container'>
        {props.children}
        {/* {ToDos.map(toDo => (
            <TodoItem 
            key= {toDo.text} 
            text={toDo.text}
            completed={toDo.completed} />
          ))} */}
      </ul>
    </section>
  )
  
  
}

export { TodoList };