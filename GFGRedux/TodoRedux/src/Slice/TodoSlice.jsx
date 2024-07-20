import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    todos : [],
}
const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addtodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deletetodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        }
    }

})

export const {addtodo , deletetodo } = TodoSlice.actions
export default TodoSlice.reducer