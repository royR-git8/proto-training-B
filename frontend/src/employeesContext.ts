
import { createContext } from "react";
import type { Employee } from "./Employees";

export const EmployeesFilteredContext =
    createContext<Employee[]>([]);
