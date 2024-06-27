import { useState } from 'react'
import './App.css'

let lastId = 1;

function lastNewId(){
  return lastId ++;
}

function App() {

  const [todos, setTodos] = useState([]);

  const [newTodoTitle, setNewTodoTitle] = useState([])

  function addTodo (){
    const newTodoItem = {
      id: lastNewId(),
      title: newTodoTitle,
      copleted: false
    };

    setTodos([ ...todos, newTodoItem ])
  }

  console.log(todos);
  return (
    <>
      <input 
      type="text" 
      placeholder='Lütfen Bir Görev Giriniz...' 
      onChange={(e) => setNewTodoTitle(e.target.value)} />

      <button onClick={addTodo}>Add Todo</button>
      {todos.map(todo => (
        <p className={todo.copleted ? "okey-todo" : "no-todo"} key={todo.id}>{todo.title} <button>Delete</button></p>
      ))}
    </>
  )
}

export default App
