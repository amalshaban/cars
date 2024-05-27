import React from 'react'

import { BrowserRouter, Routes, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Details from './components/Details/Details'
import Home from './components/Home/Home'
import MasterLayout from './components/MasterLayout/MasterLayout'
import NotFound from './components/NotFound/NotFound'
import AllViechles from './components/AllViechles/AllViechles'

function App() {
  let routes = createBrowserRouter([  
    { path:'/',
    element: <MasterLayout/>,
    errorElement : <NotFound/>,
    children:[
      {index: true, element: <Home/>},
      {path: 'Home', element: <Home/>},
      {path: 'Details/:carId', element: <Details/>},
      {path: 'AllViechles', element: <AllViechles />},
    ]
    }
  ]);

  return (
    <>
    <RouterProvider router ={routes}/>
    </>
  )
}

export default App
