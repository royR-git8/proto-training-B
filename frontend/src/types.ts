import { z } from "Zod";

export const EmployeeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().int().positive("Age must be a positive number"),
  country: z.string().min(1, "Country is required"),
  img: z.string().url("Img must be a valid URL string"),
});
export type Employee = z.infer<typeof EmployeeSchema>
export const stylingForCards={width:"30%", margin:5, padding:10, backgroundColor:"darkslategrey"}
export const stylingForDiv : React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: "2" }

   export const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  maxWidth: "90vw",
  bgcolor: "transparent", 
  border: "none",
  boxShadow: "none",
  outline: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}