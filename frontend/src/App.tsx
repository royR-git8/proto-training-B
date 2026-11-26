import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router"
import FirstPage from './FirstPage.tsx'


createRoot(document.getElementById('root')!).render(  
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)