import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";


function TodoForm() {

  const { AddTodo, setOpenModal } = useContext(TodoContext)
  const [newTodoText, setNewTodoText] = useState("");

  const onCancel = ()=>{
    setOpenModal(false)
  }
  const onAdd = (event)=>{
    event.preventDefault();
    AddTodo(newTodoText)
    setOpenModal(false)
  }

  const onChangeText = (e)=>{
    setNewTodoText(e.target.value)
  }

  return (
    <form onSubmit={onAdd}>
      <label>Qué tienes en mente hacer?</label>
      <textarea
        placeholder="Qué quieres hacer hoy?"
        value={newTodoText}
        onChange={onChangeText}
      />
      <div>
        <button
          type="button"
          onClick={onCancel}
        >
            Cancelar
        </button>
        <button
          type="submit"
        >
            Añadir
        </button>
      </div>
    </form>
  );
}

export {TodoForm};