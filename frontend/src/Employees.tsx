import "./Employees.css";
import { useContext, useState } from 'react';
import { SearchBar } from "./SearchBar";
import { FilteredTable } from "./EmployeeTable";
import { EmployeesFilteredContext } from "./employeesContext";

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
    filterEmployees: string;
    setFilterEmployees: (value: string) => void;
}

function Employees({ employees }: EmployeesProps) {
    const [filterEmployees, setFilterEmployees] = useState("");
    employees=useContext(EmployeesFilteredContext)
    console.log(EmployeesFilteredContext)
    return (
        <>
            <SearchBar filterEmployees={filterEmployees} setFilterEmployees={setFilterEmployees} />
            <FilteredTable filteredEmployees={employees} />
        </>

    );
}



export default Employees;