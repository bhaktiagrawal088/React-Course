import React, { useState } from 'react'
import HOC from './HOC'

function Counter1({ onhandleClick, count}) {
  return (
    <div>
    <span>Counter1 ::::::</span>
      <button onClick={onhandleClick}>Click me - {count}</button>
    </div>
  )
}

export default HOC(Counter1) 
