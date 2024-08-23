import React from 'react'
import { FiCheckSquare, FiSquare  , FiEdit} from 'react-icons/fi';
export const Todo = ({todo , index , deleteTodo , toggleHandler , startEdit}) => {

    function deleteHandler() {
        deleteTodo(index);
    }
    function checkHandler() {
        toggleHandler(index)
    }
    function editHandler(){
        startEdit(index , todo.text)
    }
  return (
    <div class={`singleTodo ${todo.completed ? 'Completed' : ''}`}>
        <span onClick={checkHandler} className='checkboxIcon'>
            {todo.completed ? <FiCheckSquare size={24}/> : <FiSquare size={24}/>}
        </span>
        <h4 className='todo'>{todo.text}</h4>
        <button className="editButton" onClick={editHandler}><FiEdit size={20} /></button>
        <button className="deleteButton" onClick={deleteHandler}>Delete</button>
    </div>
  )
}
