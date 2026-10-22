import { useEffect, useState } from "react";
import axios from "axios";
import type { Employee, SearchBarProps } from "./Employees";
import { EmployeesFilteredContext } from "./employeesContext";
import Employees from "./Employees";
export function SearchBar({ filterEmployees, setFilterEmployees }: SearchBarProps) {
    
    const [employeees, setEmployees] = useState<Employee[]>([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/employees?q=${filterEmployees}`)
            .then(response => {
                setEmployees(response.data);
                console.log("hi im backendFilter ", employeees)
            })
            .catch(error => console.error("Error:", error));
    }, [filterEmployees]);

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterEmployees}
                    onChange={(event) => setFilterEmployees(event.target.value)}
                />
                <label>{' '}search for employee</label>
                <EmployeesFilteredContext.Provider value={employeees}>
                 </EmployeesFilteredContext.Provider>

            </div>
        </>

    );
}
