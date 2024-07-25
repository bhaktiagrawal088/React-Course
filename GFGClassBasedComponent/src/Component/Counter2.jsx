import React, { useState } from 'react'
import HOC from './HOC'

function Counter2({count, onhandleClick}) {
  return (
    <div>
    <span>Counter 2 :::::</span>
      <button onClick={onhandleClick}>Click me - {count}</button>
    </div>
  )
}

export default HOC( Counter2)
