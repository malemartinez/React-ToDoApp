import React from 'react';

import { TodoList, }  from './TodoList';
import { TodoItem, } from './TodoItem';
import { CreateTodoButton, } from "./createTodoButton";
import { TodoCounter, } from "./TodoCounter";
import { TodoSearch, } from "./TodoSearch";
import { TodoContext ,} from "./TodoContext";
import Modal from './Modal';
import { TodoForm } from './TodoForm';


const AppUI = () => {

  // usar useContext para acceder a las props del value en el provider
  const value = React.useContext(TodoContext);
  // deconstruimos a value
  const {error, loading , completeTodo,deleteToDo ,searchedTodos, openModal, setOpenModal } = value;

  return ( 
    // aqui ponemos los componentes de la app para renderizar
    <div className="container mt-5">

      {/* usamos el fragment para enviar en un solo elemento todos los componentes */}
      <TodoCounter />
      <TodoSearch/>

      {/* Render props */}
      {/* value = { error, loading, searchedTodos } */}
     
      <TodoList>
        {error && <p>Hubo un error</p>}
        {loading && <p>Estamos cargando la info</p>}
        {/* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p> }
        {(!error && !loading) && searchedTodos.map(toDo => (
          <TodoItem 
            key= {toDo.name} 
            text={toDo.name}
            completed={toDo.completed}
            onCompleted = {() => {completeTodo(toDo.name)}}
            onDeleted = {() => {deleteToDo(toDo.name)}} />
        ))}
      </TodoList >
      {!!openModal && (
        <Modal>
          <TodoForm>

          </TodoForm>
          <p>{searchedTodos[0]?.text}</p>
        </Modal>

      )}
      
      <CreateTodoButton
      setOpenModal = {setOpenModal}
      />
    </div>
  );
}
 
export default AppUI;


