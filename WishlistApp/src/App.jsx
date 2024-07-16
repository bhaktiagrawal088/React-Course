import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {v4 as uuid} from 'uuid'

function App () {
  const [todo, setTodo] = useState()
  const[todolist, setTodolist] = useState([])

  const [count , setCount] = useState(0)
  const timeRef = useRef('')
  const focuseRef = useRef()

  return (
    <>
    <div>
      <h1>My Wishlist App</h1>
      <input type='text' placeholder='add your wishlist here ...'
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
      onClick={() =>  {setTodolist([...todolist, {id : uuid(), todo : todo , completed : false}])
      setTodo('') } }>Add</button>
    </div>
    <div>
    {
      todolist && todolist.length > 0 && todolist.map( todo => (
        <div key={todo.id}>
        <label>
          <input type='checkbox'
            onChange={(id) => todolist.map(todo => todo.id === id ?  {...todo, completed : !todo.completed} : todo)}
          />
          <span className={todo.completed ? 'strike-through' : ''}>{todo.todo }</span>
        </label>
        <button
        onClick={() => setTodolist(todolist.filter(t => t.id !== todo.id))}
        >delete</button>
        </div>
      ))
    }
    </div>

      <div>
        <p>Count - {count}</p>
        <button onClick={() => {timeRef.current = setInterval(() => {
        setCount( prev => prev+1)}, 1000)}}>Start</button>
        <button onClick={() => clearInterval(timeRef.current)}>Stop</button>

        <br></br>
          <br></br>
        <input ref = {focuseRef } type='text' placeholder='search...'></input>
        <button onClick={() => focuseRef.current.focus()}>Focus</button>
      </div>
    </>
  )
}

export default App
