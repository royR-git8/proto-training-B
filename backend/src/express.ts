import {z} from 'Zod'
import express, {
    type Express,
    type Request,
    type Response
} from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import employeesData from '../employees.json' with { type: 'json' };
const app: Express = express();
const cors= require("cors");
const corsOptions={
    origin:("http://localhost:5173")
};
app.use(cors(corsOptions))
export const EmployeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().int().positive("Age must be a positive number"),
  country: z.string().min(1, "Country is required"),
  img: z.string().url("Img must be a valid URL string"), 
});
export type Employee = z.infer<typeof EmployeeSchema>;


function filterEmployees(): Employee[] {
    return Array.isArray(employeesData)
        ? employeesData as Employee[]
        : [];
        
}

const employees: Employee[] = filterEmployees();

const SEARCHABLE_FIELDS = [
    "name",
    "age",
    "country"
] as const satisfies (keyof Employee)[];

const normalize = (value: string) => value.toLowerCase();

export function searchEmployees(
    employees: Employee[],
    query: string
): Employee[] {
    const q = normalize(query);
    console.log("hi: " , q)
    if (q === "") {
        return employees;
    }

    return employees.filter((employee) =>
        SEARCHABLE_FIELDS.some((field) =>
            normalize(employee[field].toString()).includes(q)
        )
    );
}

app.get('/employees', (req: Request, res: Response) => {
    const q = typeof req.query.q === "string"
        ? req.query.q
        : "";
    console.log("Search query:", q, q==="");
    const empployeedata= searchEmployees(employees, q)
    res.json(empployeedata);
    console.log("hello ", empployeedata)
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
