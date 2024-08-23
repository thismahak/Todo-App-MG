import { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";


function App() {

  const [todos , setTodos] = useState([]);

  const [inputValue , setInputValue] = useState('');

  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  function inputChangeHandler(event) {
    setInputValue(event.target.value); 
   }
  

  function addTodoHandler () {
    // todos.push({
    //   inputValue
    // })
    if(inputValue === ""){
      alert("Enter a todo");
    }
    else{
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
    
    
  }
  function deleteTodoHandler(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  function clearHandler() {
    setTodos([]);
  }
 
  function toggleHandler(index) {
    const newTodos = todos.map((todo , i) => 
    i === index ? {...todo , completed: !todo.completed} : todo
    );
    setTodos(newTodos);
  }
  
  // Existing handlers...

  function startEdit(index, text) {
    setEditingIndex(index);
    setEditText(text);
  }

  function saveEdit() {
    if (editText.trim() !== '') {
      setTodos(todos.map((todo, i) =>
        i === editingIndex ? { ...todo, text: editText } : todo
      ));
      setEditingIndex(null);
      setEditText('');
    }
  }

  function cancelEdit() {
    setEditingIndex(null);
    setEditText('');
  }
  return (
    <div className="container">
      <h1 className="Heading">Todo List</h1>
        <div className="todos">
        {todos.map((todo , index) => (
          <Todo 
          key={index} 
          todo = {todo}
          index={index}
          deleteTodo = {deleteTodoHandler}
          toggleHandler={toggleHandler}
          startEdit={startEdit}
          />
        ))}
        </div>

        {editingIndex !== null && (
        <div className="editContainer">
          <input
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
          />
          <button  className="saveBtn" onClick={saveEdit}>Save</button>
          <button className="cancelBtn" onClick={cancelEdit}>Cancel</button>
        </div>
      )}

      <div>
      <input className="input"
      type="text" 
      placeholder="Enter your Todo"
      value={inputValue}
      onChange={inputChangeHandler}
      />


      
      <button className="addButton" onClick={addTodoHandler}>Add Todo</button>
      <button className="clearBtn" onClick={clearHandler}>Clear All</button>
      </div>
      
      
      
    </div>
  );
}

export default App;
