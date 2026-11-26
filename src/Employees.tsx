import React from "react";
import './Employees.css';
import { useState } from 'react';


export type Employee = {
    name: string | undefined,
    country: string | undefined,
    age: number | undefined,
    img: string | undefined;
}

type EmployeesProps = {
    employees: Employee[];
}

function Employees({ employees }: EmployeesProps) {
    return (
        <>
        <SearchBar/>
        <table className="employees-table">
            <tbody>
                {employees.map((emp, index) => (
                    <tr key={index}>
                        <td>
                            <ul>
                                <li>name of employee: {emp.name}</li>
                                <li>country: {emp.country}</li>
                                <li>age of employee: {emp.age}</li>
                                <li>
                                    photo:
                                    {emp.img && (
                                        <img
                                            src={emp.img}
                                            alt={emp.name}
                                        />
                                    )}
                                </li>
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}
function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        {' '}
        search for emplotee
      </label>
    </form>
  );
}
export default Employees;