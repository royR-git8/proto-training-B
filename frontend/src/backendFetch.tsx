import axios from  "axios"
import { useEffect, useState } from "react"
import type { Employee } from "./Employees";
import Employees from "./Employees";

export function FetchEmployeesFromBackend(){
    const [employees,setEmployees] = useState<Employee[]>([]);

    
    useEffect(()=>{
        const fetchEmployees = async () => {
        const employeeData = await axios<Employee[]>("http://localhost:3000/employees")
        setEmployees(employeeData.data)
    }

        fetchEmployees()
    },[]);
    return  (<Employees employees={employees} />);
}

export default FetchEmployeesFromBackend;