import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/ContextProvider'
import Login from './Compo/Login'
import Profile from './Compo/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Login page</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
