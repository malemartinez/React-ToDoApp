import React from "react";
import './App.css';
import AppUI from './AppUI.js';
import { TodoProvider } from "./TodoContext";



// const DefaulToDos = [
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
//     completed:false,
//   }
// ]
function App() {
  
  return (

    <TodoProvider>
      <AppUI />

    </TodoProvider>

   );
}

export default App;
