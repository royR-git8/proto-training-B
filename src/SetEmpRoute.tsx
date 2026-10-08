import Employees from './Employees.tsx'
import useFetchData from "./UseFetch.tsx"



export default function SetRoute() {
    const url= './employees.json';
    const employeesData = useFetchData(url)
    return (<Employees employees={employeesData} />)
}
