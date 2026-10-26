import axios from  "axios"
import { useEffect, useState } from "react"
import type { Employee } from "./Employees";
import Employees from "./Employees";
import { EmployeesContext } from "./employeesContext";

export function FetchEmployeesFromBackend(){
    const [employees,setEmployees] = useState<Employee[]>([]);

    
    useEffect(()=>{
        const fetchEmployees = async () => {
        const employeeData = await axios<Employee[]>("http://localhost:3000/employees")
        setEmployees(employeeData.data)
    }

        fetchEmployees()
    },[]);
    return  (
     <EmployeesContext.Provider value={employees}>
        
        <Employees employees={employees} />
         </EmployeesContext.Provider>

    );
}

export default FetchEmployeesFromBackend;