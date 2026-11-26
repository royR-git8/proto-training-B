import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router"
import NavBar from './NavBar.tsx'
  import Employees from './Employees.tsx'
import MapPage from './mapPage.tsx'
import FirstPage from './FirstPage.tsx'


createRoot(document.getElementById('root')!).render(  
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/employees" element={< Employees />}></Route>
        <Route path="/map" element={< MapPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)