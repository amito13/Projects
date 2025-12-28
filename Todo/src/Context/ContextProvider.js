// import React, { useContext,createContext } from 'react'

// export const TodoContext = createContext({
//     todos:[{
//         id:1,
//         todo: "todo msg",
//         completed: false
//     }],
//     addTodo: (todo)=>{},
//     updateTodo: (id,todo)=>{},
//     deleteTodo: (id)=>{},
//     togglecompleted: (id)=>{},
// })

// export const useTodo = ()=>{
//     return useContext(TodoContext)
// }

// export const TodoProvider = TodoContext.Provider


import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider