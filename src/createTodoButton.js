import React from "react";
import './createTodoButton.css'

function CreateTodoButton (props) {
// manejo de evento en el boton
  const onClickButton = () =>{
    alert('Alguien ha hecho clic')
  }

  return (
    <div className='button-container'>
    <button 
      className='TodoButton'
      onClick = {
         onClickButton
      }
    >
      +
    </button>
    </div>
    
  );
}

// export default TodoCounter
export { CreateTodoButton };