import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../Slice/CounterSlice"

export const Store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

console.log(Store.getState())