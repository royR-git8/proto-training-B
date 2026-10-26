import { useContext, useEffect } from "react";
import axios from "axios";
import type { SearchBarProps } from "./Employees";
import { EmployeesFilteredContext } from "./employeesContext";

export function SearchBar({
    filterEmployees,
    setFilterEmployees
}: SearchBarProps) {

    const context = useContext(EmployeesFilteredContext);

    if (!context) {
        throw new Error("EmployeesFilteredContext Provider is missing");
    }

    const { setEmployees } = context;

    useEffect(() => {
        axios.get(
            `http://localhost:3000/employees?q=${(filterEmployees)}`
        )
        .then(response => {
            setEmployees(response.data);
        })
        .catch(error => console.error("Error:", error));
    }, [filterEmployees, setEmployees]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={filterEmployees}
                onChange={(event) =>
                    setFilterEmployees(event.target.value)
                }
            />
            <label> search for employee</label>
        </div>
    );
}