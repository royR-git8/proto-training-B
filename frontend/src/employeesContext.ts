import { createContext } from "react";
import type { Employee } from "./Employees";

type EmployeesFilteredContextType = {
    employees: Employee[];
    setEmployees: (employees: Employee[]) => void;
};

export const EmployeesContext = createContext<Employee[]>([]);

export const EmployeesFilteredContext =
    createContext<EmployeesFilteredContextType | null>(null);