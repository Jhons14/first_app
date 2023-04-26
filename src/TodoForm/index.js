import React from 'react';
import "./TodoForm.css"

function TodoForm({addTodo,setOpenModal}) {

  const [newTodoValue,setNewTodoValue] = React.useState('')
  const onChange = (event) =>{
    setNewTodoValue(event.target.value)
  }
  const onCancel = () =>{
    setOpenModal(false)
  }

  const onSubmit =(event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  return(
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
      placeholder='Ir al gym en la tarde'
      onChange={onChange}
      value = {newTodoValue}
      >
      </textarea>
      <div className='TodoForm-buttonContainer'>
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type='button'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type='submit'
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}
  export {TodoForm}
