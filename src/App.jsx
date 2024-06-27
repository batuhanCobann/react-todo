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

  function completedTodo(todoId){
    const updateTodo =  todos.map((todo) =>
    todo.id == todoId ? {...todo, copleted: !todo.copleted } : todo 
  );
  setTodos(updateTodo)
  }

 
  function deleteTodo  (todoId) {
    const updateTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updateTodos)
  }


  return (
    <>
      <input 
      type="text" 
      placeholder='Lütfen Bir Görev Giriniz...' 
      onChange={(e) => setNewTodoTitle(e.target.value)} />

      <button onClick={addTodo}>Add Todo</button>
      {todos.map(todo => (
        <p className={todo.copleted ? "okey-todo" : "no-todo"} 
        key={todo.id}> 
        <span>{todo.title}</span> 
        <button onClick={() => completedTodo(todo.id)}>{todo.copleted ? "Geri Al" : "Tamamla" }</button> 
        <button onClick={() => deleteTodo(todo.id)}>Delete</button></p>
      ))}
    </>
  )
}

export default App
