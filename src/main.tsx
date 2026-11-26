import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router"
import NavBar from './NavBar.tsx'
import Employees, { type Employee } from './Employees.tsx'

const employeesData: Employee[] = [
    { name: "Andrew", country: "Japan", age: 67, img: "https://..." },
    { name: "Cheineese Travis Scott", country: "China", age: 33, img: "https://..." },
    { name: "Big Chin Jonny", country: "Morocco", age: 45, img: "https://..." },
    { name: "Miguelito", country: "Spain", age: 25, img: "https://..." },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/employees" element={<Employees employees={employeesData} />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)