import React from 'react';

import TodoList from "./TodoList"
import TodoItem from "./TodoItem"
import CreateTodoButton from "./CreateTodoButton"
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoContext } from './TocoContext';


const AppUI = () => {

  // usar useContext para acceder a las props del value en el provider

  
  return ( 
    // aqui ponemos los componentes de la app para renderizar
    <div className="container mt-5">

      {/* usamos el fragment para enviar en un solo elemento todos los componentes */}
    <TodoCounter />
    <TodoSearch/>

    <TodoContext.Consumer>
      {/* Render props */}
        {/* value = { error, loading, searchedTodos } */}
      {(value) => (
         <TodoList>
         {value.error && <p>Hubo un error</p>}
         {value.loading && <p>Estamos cargando la info</p>}
   
         
         {value.searchedTodos.map(toDo => (
           <TodoItem 
             key= {toDo.name} 
             text={toDo.name}
             completed={toDo.completed}
             onCompleted = {() => {value.completeTodo(toDo.name)}}
             onDeleted = {() => {value.deleteTodo(toDo.name)}} />
         ))}
       </TodoList >
      )}
    </TodoContext.Consumer>

    <CreateTodoButton />
  </div>
   );
}
 
export default AppUI;


