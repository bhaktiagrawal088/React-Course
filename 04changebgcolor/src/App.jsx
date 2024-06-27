import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
      <div className=" w-full h-screen duration-200 "
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-content gap-3  bg-white px-3 py-2 rounded-full 
           text-white shadow-lg'>
          <button onClick = {() => setColor("green")}className=' outline-none px-4 py-1 rounded-full' 
          style={{backgroundColor:'green'}}>
            green
          </button>
          <button onClick={() => setColor("red")} className=' outline-none px-4 py-1 rounded-full' 
          style={{backgroundColor:'red'}}>
            red
          </button>
          <button onClick={() => setColor("yellow")} className=' outline-none px-4 py-1 rounded-full' 
          style={{backgroundColor:'yellow'}}>
            yellow
          </button>
          <button  onClick = { () => setColor("olive")}className=' outline-none px-4 py-1 rounded-full' 
          style={{backgroundColor:'olive'}}>
            olive
          </button>
          <button onClick={() => setColor('black')} className=' outline-none px-4 py-1 rounded-full' 
          style={{backgroundColor:'black'}}>
            black
          </button>
          <button onClick={() => setColor("orange")} className=' outline-none px-4 py-1 rounded-full' 
          style={{backgroundColor:'orange'}}>
            orange
          </button>
          <button  onClick={() => setColor("purple")} className=' outline-none px-4 py-1 rounded-full' 
          style={{backgroundColor:'purple'}}>
          purple
          </button>



          </div>
        </div>
      </div>
  );
}

export default App
