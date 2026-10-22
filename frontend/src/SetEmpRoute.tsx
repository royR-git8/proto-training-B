import Employees from "./Employees.tsx";
import useEmployeeFetchData from "./UseFetch.tsx"



export default function SetRoute() {
    const url= './employees.json';
    const employeesData = useEmployeeFetchData(url)
    console.log("hi im frontend fetchj")
    return (<Employees employees={employeesData} />)
}
