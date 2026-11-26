import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { modalStyle, stylingForCards, stylingForDiv, type Employee } from "./types";
import { useState } from "react";
import { deployCard } from "./employeeCardForModal";
export type FilteredTableProps = {
  filteredEmployees?: Array<Employee>;
};

export function FilteredTable({ filteredEmployees }: FilteredTableProps) {
  const [employee, setEmployee] = useState<Employee>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (filteredEmployees === undefined) return <div>error</div>;
  return (
    <div style={stylingForDiv}>
      {filteredEmployees.map((employee, index) => (
        <Card onClick={() => {
                  handleOpen();
                  setEmployee(employee);
                }} variant="outlined" style={stylingForCards} key={index}>
          <ul>
            <li>name of employee: {employee.name}</li>
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
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={modalStyle}
        >
          <Typography id="modal-modal-title" variant="h6"></Typography>
          <Typography id="modal-modal-description">
            {deployCard(employee as Employee)}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
