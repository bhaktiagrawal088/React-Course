import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
    count : 0,
}

const CounterSlice = createSlice({
    name : 'counter',
    initialState : initialValue,
    reducers : {
        // increment : (state, action) => {
        //     return state.count = state.count+1 ; // Immer.js(return a new object without changing the old st)
        // },
        // decrement : (state, action) => {
        //     return state.count = state.count -1;

        // }
        increment : state => {state.count = state.count + 1}, // 'counter/increment'
        decrement : state => {state.count = state.count - 1}, // 'counter/decrement'
    }
})
export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer