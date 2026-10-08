import type { Employee } from "./Employees";
import Card from '@mui/material/Card';
type  FilteredTableProps = {
    filteredEmployees: Employee[]
}


export function FilteredTable({filteredEmployees}:FilteredTableProps){
    return(
                <div style={{display:"flex", flexWrap:"wrap", gap:"2"}}>
                    {filteredEmployees.map((emp, index) => (
                        <Card variant="outlined" style={{width:"30%", margin:5, padding:10, backgroundColor:"darkslategrey"}} key={index}>
                            
                                <ul>
                                    <li>name of employee: {emp.name}</li>
                                    <li>country: {emp.country}</li>
                                    <li>age of employee: {emp.age}</li>
                                    <li>
                                        photo:
                                        
                                            <img className="imgStyles"
                                                src={emp.img}
                                                alt={emp.name}
                                            />
                                        
                                    </li>
                                </ul>
                        </Card>
                    )
                    )}
                    </div>
            
    );
}