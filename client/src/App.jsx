import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddNewCard from './components/AddNewCard.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import Mesage from './components/Mesage.jsx';
import Footer from './components/Footer.jsx'

function App() {
  const [tab, settab] = useState([])

  useEffect(() => {
    fetch('/api/msg')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        settab(json);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  return (
    <>
    <div className='bg-custom-gradient w-full min-h-svh flex flex-col p-4 items-center'>
      <AddNewCard tab={tab} settab={settab}/>
      <div className='flex w-2/3  justify-center items-center min-h-full '> 
      <Mesage tab={tab} settab={settab} />
      </div>
       <Outlet/>
       <Footer/>
    </div>
     
    </>
  )
}

export default App
