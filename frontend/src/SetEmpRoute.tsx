import Employees from "./Employees.tsx";
import useEmployeeFetchData from "./UseFetch.tsx"



export default function SetRoute() {
    const url= './employees.json';
    const employeesData = useEmployeeFetchData(url)
    return (<Employees employees={employeesData} />)
}
