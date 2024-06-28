import { useState } from 'react'
import './App.css'

let lastId = 1;

function lastNewId(){
  return lastId ++;
}


function App() {

  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState([])
  const [editTodo, setEditTodo] = useState("")

  function addTodo (){
    const newTodoItem = {
      id: lastNewId(),
      title: newTodoTitle,
      copleted: false,
      edit: false
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
  
  function changeNewTodo(todoId){
    const updateTodos = todos.map((todo) => todo.id == todoId ? {...todo, edit: true} : todo)
    setTodos(updateTodos)

  }

  function saveNewTodo(todoId){
    const updateTodos = todos.map((todo) => todo.id == todoId ? {...todo, title: editTodo, edit: false } : todo)
    setTodos(updateTodos)
  }



  return (
    <>
      <textarea 
      className='todo-input'
      type="text" 
      placeholder='Lütfen Bir Görev Giriniz...' 
      onChange={(e) => setNewTodoTitle(e.target.value)} />

      <br />

      <button onClick={addTodo}>Add Todo</button>

      {todos.map(todo => (
        <div>
          <p className={todo.copleted ? "okey-todo" : "no-todo"} key={todo.id}> 
            <span>{todo.title}</span> 
            {todo.edit ? 
            <input type="text" placeholder='Todo Düzenle' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} /> 
            : <button onClick={() => completedTodo(todo.id)}>{todo.copleted ? "Geri Al" : "Tamamla" }</button>}
          
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>

            {todo.edit ? 
            <button onClick={() => saveNewTodo(todo.id)}>Kaydet</button> 
            : <button onClick={() => changeNewTodo(todo.id)}>Düzenle</button>}
         </p>
        </div>
        
      ))}
    </>
  )
}

export default App
