import "./Employees.css";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { FilteredTable } from "./EmployeeTable";
import { useEmployees } from "./useEmployees";
import type { Employee } from "./types";



export type EmployeesProps = {
  employees: Array<Employee>;
};



function Employees() {
  const [filterEmployees, setFilterEmployees] = useState("");

  const { employees } = useEmployees({ query: filterEmployees });

  return (
    <>
      <SearchBar
        filterEmployees={filterEmployees}
        setFilterEmployees={setFilterEmployees}
      />
      <h3>click on any employee for additional information</h3>
      <FilteredTable filteredEmployees={employees} />
    </>
  );
}

export default Employees;
