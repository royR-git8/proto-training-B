import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router"
import NavBar from './NavBar.tsx'
import FetchEmployeesFromBackend from './backendFetch.tsx'


createRoot(document.getElementById('root')!).render(  
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/employees" element={< FetchEmployeesFromBackend />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)