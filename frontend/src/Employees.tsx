import "./Employees.css";
import { useContext, useState } from "react";
import { SearchBar } from "./SearchBar";
import { FilteredTable } from "./EmployeeTable";
import { EmployeesFilteredContext } from "./employeesContext";

export type Employee = {
    name: string;
    country: string;
    age: number;
    img: string;
};

export type EmployeesProps = {
    employees: Employee[];
};

export type SearchBarProps = {
    filterEmployees: string;
    setFilterEmployees: (value: string) => void;
};

function Employees({ employees }: EmployeesProps) {
    const [filterEmployees, setFilterEmployees] = useState("");

    const [filteredEmployees, setFilteredEmployees] =
        useState<Employee[]>(employees);

    return (
        <EmployeesFilteredContext.Provider
            value={{
                employees: filteredEmployees,
                setEmployees: setFilteredEmployees
            }}
        >
            <SearchBar
                filterEmployees={filterEmployees}
                setFilterEmployees={setFilterEmployees}
            />

            <FilteredTable filteredEmployees={filteredEmployees} />
        </EmployeesFilteredContext.Provider>
    );
}

export default Employees;