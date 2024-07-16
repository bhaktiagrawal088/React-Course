import { createContext, useReducer } from "react"

export const CartContext = () => {

}
const CartContetxt = createContext()

const CartProvider = () => {
    const initialState = {
        cart : []
    }
    const [ state, dispatch] = useReducer(reducerFunc, initialState)
}