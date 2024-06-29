import { createContext, useContext } from "react";


export const Todocontexts = createContext({
    Todos : [{
        id : 1,
        todo : "Learn React",
        completed : false,
    }],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {},
})


export const useTodo = () =>{
    return useContext(Todocontexts)
}

export const TodoProvider = Todocontexts.Provider