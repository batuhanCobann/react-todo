import { useState } from 'react'
import './App.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { MdOutlineSaveAlt } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { MdOutlineReplay } from "react-icons/md";

let lastId = 1;

function lastNewId(){
  return lastId ++;
}


let date = new Date();

let datestring = ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);


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
    <div className='new-todo-div'>
      <input 
        className='todo-input'
        type="text" 
        placeholder='Lütfen Bir Görev Giriniz...' 
        onChange={(e) => setNewTodoTitle(e.target.value)}
        required />
        <button className='addBtn' onClick={addTodo}>Add</button>
    </div>
      {todos.map(todo => (
      <div className='todos'>
          <p className={todo.copleted 
            ? "okey-todo todo"  
            : "no-todo todo"} key={todo.id}>
           <span>{todo.title}</span> </p>
           <div className='btns-div'>
          {todo.edit ? 
            <input className='edit-input' type="text" placeholder='Todo Düzenle' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} /> 
            : <button className='edit-okey-btn' onClick={() => completedTodo(todo.id)}>{todo.copleted ? <MdOutlineReplay style={{width:"30px", height:"18px"}}  /> : <MdFileDownloadDone style={{width:"30px", height:"18px"}}  /> }</button>}
          
            <button className='delete-btn' onClick={() => deleteTodo(todo.id)}><RiDeleteBin6Line style={{width:"30px", height:"18px"}}  /></button>

            {todo.edit ? 
            <button className='save-btn' onClick={() => saveNewTodo(todo.id)}><MdOutlineSaveAlt style={{width:"30px", height:"18px"}}  /></button> 
              : <button className='edit-btn' onClick={() => changeNewTodo(todo.id)}><FaEdit style={{width:"30px", height:"18px"}} /></button>}
              <p>{todo.edit ? "" : datestring }</p>
           </div>
        </div>
        
      ))}



    </>
  )
}

export default App
