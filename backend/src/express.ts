import express, { type Express, type Request, type Response } from "express";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import employeesData from "../employees.json" with { type: "json" };
import type { Employee } from "./types";
const app: Express = express();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

function filterEmployees(employees: unknown): Array<Employee> {
  return Array.isArray(employees) ? (employees as Array<Employee>) : [];
}

const employees: Employee[] = filterEmployees(employeesData);

const SEARCHABLE_FIELDS = [
  "name",
  "age",
  "country",
] as const satisfies (keyof Employee)[];

export function searchEmployees(
  employees: Employee[],
  query: string,
): Employee[] {
  const q = query.toLocaleLowerCase();
  if (q === "") {
    return employees;
  }

  return employees.filter((employee) =>
    SEARCHABLE_FIELDS.some((field) =>
      employee[field].toString().toLocaleLowerCase().includes(q),
    ),
  );
}

app.get("/employees", (req: Request, res: Response) => {
  const q = typeof req.query.q === "string" ? req.query.q : "";
  const empployeedata = searchEmployees(employees, q);
  res.json(empployeedata);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
