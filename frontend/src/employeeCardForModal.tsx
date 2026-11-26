import {  type Employee } from "./types";
import Card from "@mui/material/Card";
export function deployCard(employee: Employee) {
  if (employee != undefined)
    return (
      <>
        <Card
          variant="outlined"
          style={{
            width: "100%",
            padding: "24px",
            backgroundColor: "#243b3b", 
            color: "#f8fafc", 
            borderRadius: "16px",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center",
          }}
        >
          <ul>
            <h3>{employee.name}'s additional information: </h3>
            <li>name of employee: {employee.name}</li>
            <li>country: {employee.country}</li>
            <li>age of employee: {employee.age}</li>
            <li>
              photo:
              <img
                className="imgStyles"
                src={employee.img}
                alt={employee.name}
              />
            </li>
          </ul>
        </Card>
      </>
    );
  else return <div>could not find employee please try again</div>;
}
