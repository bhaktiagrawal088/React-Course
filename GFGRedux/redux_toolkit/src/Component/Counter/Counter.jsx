import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../Slice/CounterSlice'
function Counter() {
    const dispatch = useDispatch() 
    const count = useSelector(state => state.counter.count)
  return (
    <div>
      <button onClick={() =>{dispatch(increment())} }>Up</button>
      <span>{count}</span>
      <button onClick={() => {dispatch(decrement())}}>Down</button>
    </div>
  )
}

export default Counter
