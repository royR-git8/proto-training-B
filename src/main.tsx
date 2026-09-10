import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter,Route,Routes} from "react-router"
import NavBar from './NavBar.tsx'
import Employees from './Employees.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

    <NavBar />
   <Routes>
    <Route path="/" element= {<App />}></Route>
    <Route path="/employees" element= {<Employees />}></Route>
   </Routes>
    </BrowserRouter>
  </StrictMode>,
)
