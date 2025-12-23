import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Header from './Compo/Header/Header.jsx'
import Home from './Compo/Home/Home.jsx'
import About from './Compo/About/About.jsx'
import Contact from './Compo/Contact/Contact.jsx'
import Git from './Compo/Git/Git.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element = {<Layout/>}>
            <Route path ='' element = {<Home/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='contact' element = {<Contact/>} />
            <Route path='/git' element = {<Git/>}/>
        </Route>
  )




)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
