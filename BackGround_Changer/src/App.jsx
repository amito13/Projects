import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')

  return (
    <>
      <div className='w-full% h-screen' style={{background: color}}>
       <div className=' flex flex-wrap justify-center w-240 h-15 mx-60 gap-10 rounded-3xl' style={{background: 'grey'}}
          id="bar">
              <button  className = 'gap-10'onClick={()=> setcolor('red') } >Red</button>
               <button className = 'gap-10' onClick={()=> setcolor('Green') } >Green</button>
                <button className = 'gap-10' onClick={()=> setcolor('Blue') } >Blue</button>
          </div>
        
      </div>
    </>
  )
}

export default App
