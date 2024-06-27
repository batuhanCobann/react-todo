import { useState } from 'react'
import './App.css'

function App() {

  const [todo, setTodo] = useState("");

  console.log(todo);

  return (
    <>
      <input type="text" placeholder='Lütfen Bir Görev Giriniz...' onChange={(e) => setTodo(e.target.value)} />
    </>
  )
}

export default App
