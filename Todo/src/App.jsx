import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {TodoProvider} from './Context/index'
import {TodoForm,TodoItem} from './Compo/index'
function App() {
  const [Todo,setTodo] = useState([])

  const addTodo = (todo)=>{
    setTodo((prev)=> [...prev,{id:Date.now(),...todo}])
  }

  const updateTodo = (id,todo)=>{
    setTodo((prev)=> prev.map((prevtodo)=>(prevtodo.id === id ? { ...prevtodo, ...todo } : prevtodo
)))
  }
  
  const deleteTodo = (id)=>{
    setTodo((prev)=>prev.filter((todo)=>todo.id !==id))
  }

  const togglecompleted = (id)=>{
    setTodo((prev)=>prev.map((prevtodo)=> prevtodo.id===id? {...prevtodo,completed: !prevtodo.completed} : prevtodo))
  }

  useEffect(()=>{
    const STodo = JSON.parse(localStorage.getItem("Todo"));
    if(STodo && STodo.length>0){
      setTodo(STodo)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("Todo",JSON.stringify(Todo))
  },[Todo])



  return (
    <TodoProvider  value={{ Todo, addTodo, updateTodo, deleteTodo, togglecompleted }}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {Todo.map((todo)=>(
                          <div key = {todo.id}
                          className='w-full'
                          > 
                          <TodoItem todo={ todo}/>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
    </TodoProvider>
  )

}
export default App
