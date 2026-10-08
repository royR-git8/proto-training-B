import './Employees.css';
import { useState } from 'react';
import { SearchBar } from "./SearchBar";
import { FilteredTable } from "./EmployeeTable";

export type Employee = {
    name: string,
    country: string,
    age: number,
    img: string;
}

export type EmployeesProps = {
    employees: Employee[];
}

export type SearchBarProps = {
    filterEmps: string;
    setFilterEmps: (value: string) => void;
}

function Employees({ employees }: EmployeesProps) {
    const [filterEmployees, setFilterEmployees] = useState("");

    const filteredEmployees = employees.filter((emp) =>
        (emp.name?.toLowerCase().includes(filterEmployees.toLowerCase()) || (emp.country?.toLowerCase().includes(filterEmployees.toLowerCase())) || (emp.age?.toString().includes(filterEmployees.toString())))
    );

    return (

        <>
   
        <SearchBar filterEmps={filterEmployees} setFilterEmps={setFilterEmployees} />
        <FilteredTable filteredEmployees={filteredEmployees} />
        </>

    );
}



export default Employees;