import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Compo/Login'
import Profiel from './Compo/Profile'
function App() {
  
  return (
   <UserContextProvider>
    <h1>login page</h1>
    <br />
    <Login/>
    <Profiel/>
   </UserContextProvider>
  
  );
}

export default App
