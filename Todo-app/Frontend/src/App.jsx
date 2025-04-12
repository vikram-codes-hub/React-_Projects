import { useState } from 'react'

import './App.css'
import Todoinfo from './Components/Todoinfo'
import Todos from './Components/Todos'

function App() {
  const [Todoss, setTodoss] = useState([])
  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json=await res.json()
    setTodoss(json.todos)
  })

  return (
    <>
    <Todoinfo/>
    <Todos todos={Todoss}/>
    </>
  )
}

export default App
