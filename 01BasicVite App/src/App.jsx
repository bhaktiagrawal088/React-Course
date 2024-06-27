import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bhakti from './Bhakti'


function Myapp(){
  return(
    <>
      <h1>My App</h1>
    </>
  )
}

function App() {
  const name = "Bhakti Agrawal"
  return (
    <>
      <h1>Hello vite </h1>
      <p> Welcome to first react app {name}</p>
      <Bhakti/>
      <Myapp/>
    </>
  )
}

export default App
