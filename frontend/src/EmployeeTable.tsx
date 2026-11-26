import Card from '@mui/material/Card';
import type { Employee } from './types';
export type  FilteredTableProps = {
    filteredEmployees?: Array<Employee>
}


export function FilteredTable({filteredEmployees}:FilteredTableProps){
    if (filteredEmployees === undefined) return <div>error</div>
    return(
                <div style={{display:"flex", flexWrap:"wrap", gap:"2"}}>
                    {filteredEmployees.map((employee, index) => (
                        <Card variant="outlined" style={{width:"30%", margin:5, padding:10, backgroundColor:"darkslategrey"}} key={index}>
                            
                                <ul>
                                    <li>name of employee: {employee.name}</li>
                                    <li>country: {employee.country}</li>
                                    <li>age of employee: {employee.age}</li>
                                    <li>
                                        photo:
                                        
                                            <img className="imgStyles"
                                                src={employee.img}
                                                alt={employee.name}
                                            />
                                        
                                    </li>
                                </ul>
                        </Card>
                    )
                    )}
                    </div>
            
    );
}