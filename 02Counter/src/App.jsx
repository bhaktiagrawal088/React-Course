import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [counter, setcounter ] = useState(15);
    const addValue = () => {
    if(counter >= 20) return;
    setcounter(counter+1);
  }

  const removeValue = () => {
    if(counter <= 0) return;
    setcounter(counter-1);
  }
  return (
    <>
     <h1>Counter Project</h1>
     <h2>Counter value : {counter}</h2>

     <button onClick={addValue}  disabled={counter>= 20}>Add value</button>

     <br/><br/>
     <button onClick={removeValue} disabled={counter<= 0}>Remove value</button>
     </>
  )
}

export default App
