
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
type Employee = {
    name: string;
    age: number;
    country: string;
    img: string;
};

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

    res.json(searchEmployees(employees, q));
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
