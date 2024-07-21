import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import Mesage from './components/Mesage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black w-full h-svh'>
      <div className='flex justify-center items-center h-full '> 
      <Mesage/>
      </div>
       <Outlet/>
    </div>
     
    </>
  )
}

export default App
