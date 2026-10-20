import { useState } from "react";
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
    filterEmployees: string;
    setFilterEmployees: (value: string) => void;
}
//the callback function the .filter uses to filter the employees with every possible field.
function filteringMethods(employee: Employee, filterEmployees: string) {
    return(
    (employee.name?.toLowerCase().includes(filterEmployees.toLowerCase()) || (employee.country?.toLowerCase().includes(filterEmployees.toLowerCase())) || (employee.age?.toString().includes(filterEmployees.toString())))
    )
}
function Employees({ employees }: EmployeesProps) {
    const [filterEmployees, setFilterEmployees] = useState("");

    const filteredEmployees = employees.filter((employee)=> filteringMethods(employee,filterEmployees));

    return (

        <>

            <SearchBar filterEmployees={filterEmployees} setFilterEmployees={setFilterEmployees} />
            <FilteredTable filteredEmployees={filteredEmployees} />
        </>

    );
}



export default Employees;