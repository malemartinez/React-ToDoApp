import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext()
// {Provider, Consumer} = TodoContext

function TodoProvider(props){

  const DefaulToDos = [
       {
         name: 'Hacer el almuerzo', 
         completed:true
       },
       {
         name: 'Ir al medico', 
         completed:false
       },
       {
         name: 'Pagar factura luz', 
         completed:false,
       }
     ];
  const {
     item : ToDos,
     saveItem : saveToDos,
      loading , 
      error
   } = useLocalStorage('TODOS_V1', DefaulToDos)

  //  creamos el estado para mostrar el modal
  const [openModal, setOpenModal]= useState(false);
 
  // vamos a definir un estado para la busqueda de Todos
  const [searchValue, setSearchValue]= React.useState('');
  // vamos a contar cuantos Todos estan hechos, primero creamos el estado de todos
  
  // vamos a contar la cantidad de todos hechos
  const completedTodo = ToDos.filter( todo => todo.completed ).length;
  // vamos a contar el total de todos
  const totalTodos = ToDos.length;


  // vamos a juntar el buscador con el componente de todoList para que me filtre los que tengan las letras ingresadas en el buscador

  // creamos una variable que va a contener los TOdos
  let searchedTodos = [];

  // creamos la logica para el filtro
  // si no se ha escrito nada, muestre todos los todos
  if ( !searchValue.length >= 1){
    searchedTodos = ToDos;
  }
  // si ya se scribio asi sea una letra se hace el filtro, mostrando solo los todos que tengan esa letra
  else {
    searchedTodos = ToDos.filter( todo =>{
      // primero vamos a normalizar los textos. Ponemos todo en miniscula
      const TodoText = todo.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // retornamos solo los que cumplen con la condicion
      return TodoText.includes(searchText)
    } )

  }


  //completar todos
  const completeTodo = (name)=>{
    //vamos a buscar la posicion del toDo
    const TodoIndex = ToDos.findIndex(todo => todo.name === name)
    const newTodos = [...ToDos]
    newTodos[TodoIndex].completed = true
    saveToDos(newTodos )
    //enviar los datos a la base con el update de completado
   
  }

  //eliminar todos
  const deleteToDo = (name)=>{
    const newTodos = ToDos.filter(todo=>todo.name !== name)
    saveToDos(newTodos)
  }

  // Añadir Todos
  const AddTodo = (name)=>{
    const newTodos = [...ToDos]
    newTodos.push(
      {
        completed:false,
        name
      }
    )
    saveToDos(newTodos )

   
  }
  return(
    <TodoContext.Provider value={ {
      error,
      loading,
      totalTodos,
      completedTodo,
      searchValue, 
      setSearchValue ,
      searchedTodos, 
      completeTodo, 
      deleteToDo,
      openModal,
      setOpenModal,
      AddTodo
    } } >
      {props.children}
      {/* aqui deben vivir todos los componenets que quieran acceder a las props */}
    </TodoContext.Provider>
  );
}

export { TodoContext , TodoProvider };