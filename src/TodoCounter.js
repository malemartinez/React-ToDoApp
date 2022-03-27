import React from "react";
import './TodoCounter.css'

function TodoCounter({ totalTodos, completedTodo }){
  return (
    <div className='title-container'>
      <h1>ToDo App</h1>
      <h4 className='Counter-Title'>Has completado {completedTodo} de {totalTodos} tareas</h4>

    </div>

  )
}

// export default TodoCounter
export { TodoCounter };