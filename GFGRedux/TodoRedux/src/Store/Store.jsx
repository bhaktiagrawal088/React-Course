import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../Slice/TodoSlice'
import PostReducer from "../Slice/PostSlice"

export const Store = configureStore({
    reducer: {
        todos  : TodoReducer,
        posts : PostReducer
    }
})