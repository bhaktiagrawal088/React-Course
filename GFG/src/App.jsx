import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
function AddButton(props){
  
  return (
    <>
      <button onClick={() => props.setCount(props.count+1)}>Increament </button>
    </>
  )
}
function DeleteButton(props){
  
  return(
    <button onClick={() => props.setCount(props.count -1)}>Decrement </button>
  )
}


function App() {
  const [count, setCount] = useState(0)
  const [ search , setSearch] = useState('')


  const initial = {
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  }

  const [form, setForm ] = useState(initial)
  
  useEffect(() => {
    const URL = async () => {
      const res = await fetch(`https://dummyjson.com/products/${count}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }
  },[count])



  return (
    <>
    
    <AddButton count={count} setCount={setCount}/>
    <span>The value is  {count}</span>
    <DeleteButton count={count} setCount={setCount}/>
    <br></br>
    <br></br>

    <input onChange={(e) => setSearch(e.target.value)} placeholder='search'></input>
    <p>Your search is {search}</p>
    <br></br>
    <br></br>

    <label>Name : </label>
    <input type='text' 
    onChange={(e) => setForm({...form, name: e.target.value})}
    placeholder= "Enter your name"></input>
    <br></br>
    <label >Email :</label>
    <input type='email' 
    onChange={(e) => setForm({...form, email: e.target.value})}
    placeholder= "Enter your email"></input>
    <br></br>
    <label>Password :</label>
    <input type='password' 
    onChange={(e) => setForm({...form, password: e.target.value})}
    placeholder= "Enter your password"></input>
    <br></br>
    <label>Phone Number : </label>
    <input type='number' 
    onChange={(e) => setForm({...form, phone : e.target.value})}
    placeholder= "Enter your phone number"></input>
    <br></br>
    <label>Address : </label>
    <input type='text' 
    onChange={(e) => setForm({...form, address: e.target.value})}
    placeholder= "Enter your address"></input>
    <br></br>
    <p>Your Details</p>
      <p>Name :  {form.name}</p> 
      <p>Email : {form.email} </p>
      <p>Password : {form.password}</p> 
      <p>Phone Number : {form.phone} </p>
      <p>Address : {form.address}</p>
    <br></br>
    <button onClick={() => setForm(initial)}>Reset</button>

    <br></br>
    <br></br>

    <button onClick={() => setCount(count+1)}> Count - {count}</button>


  
    </>
  )
}

export default App
