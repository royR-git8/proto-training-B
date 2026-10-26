import { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import type { Emoployee } from './types';

const EmployeeContext = createContext<Emoployee>({name: " a", age:1, id:2});

function Component1() {
  const [emp, setEmp] = useState({name: "name", id: 1,age: 3});

  return (
    <EmployeeContext.Provider value={emp}>
      <h1>{`Hello ${emp}!`}</h1>
      <Component2 />
    </EmployeeContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
    </>
  );
}