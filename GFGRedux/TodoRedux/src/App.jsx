import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch , useSelector} from 'react-redux'
import { addtodo , deletetodo} from './Slice/TodoSlice'
import {v4 as uuid} from 'uuid'
import { loadPost } from './Slice/PostSlice'

function App() {
  const [inputext , setInputText] = useState('')
  const dispatch = useDispatch()

  const {todos} =   useSelector(state => state.todos)
  console.log(todos)

  const onAdd = () => {
      dispatch(addtodo({
        id: uuid(),
        todo: inputext,
      }))
      setInputText('')
  }
  const onDelete = (id) => {
    dispatch(deletetodo(id))
  }

  //********loadpost */
  const {posts, status} = useSelector(state => state.posts)
  useEffect(() => {
    if(status === 'idle'){
      dispatch(loadPost())
    }
  } , [])
  return (
    <>
      <div className="App">
        <h1 className='bg-yellow-400 text-red-400 p-4 m-4 rounded-2xl'>Todo App</h1>
        <input value={inputext}
         onChange={(e) => setInputText(e.target.value)}
         placeholder='Enter todo item'/>
        <button onClick={onAdd}>Add</button>
      </div>
      <div>
        {todos?.length > 0 && todos.map(todo => (
          <div key={todo.id}>
            <span>{todo.todo}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        ))
      }
      </div>
      <br>
      </br>
      <div>
        <h1>createAsyncThunk</h1>
      </div>
    </>
  )
}

export default App
