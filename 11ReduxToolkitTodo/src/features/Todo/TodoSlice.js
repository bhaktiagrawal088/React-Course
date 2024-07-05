import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos : [{id: 1, text : 'Hello world', completed : false}]
}


export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            state.todos.push({id : nanoid(), text : action.payload, completed: false})
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo : (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, text : action.payload.text}: todo)
        },
        toggleTodo : (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? {...todo, completed : !todo.completed} : todo)
        }
    }
})

export const {addTodo, removeTodo, editTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer