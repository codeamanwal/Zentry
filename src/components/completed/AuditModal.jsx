import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const AuditModal = ({
  uniqueId,
  open,
  handleClose,
  onSave,
  type
}) => {
  const [comments, setComments] = useState([]);

  const handleSave = () => {
    onSave(comments);
  };

  const activeDataSet = [
    {
      dateTime: "25.09.2023 01:00:01",
      user: "test1@test.com",
      changes: "test -> test1",
    },
    // Add more data if necessary
  ];

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ backgroundColor: "#497380", color: "white" }}>
        {type === "party"
          ? "Party"
          : type === "counterParty"
          ? "Counter Party"
          : "Audit Report"}
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Audit Report for Unique Id: {uniqueId}
        </Typography>
        <Table className="min-w-full divide-y divide-gray-300 border border-gray-800">
          <TableHead className="bg-gray-800" sx={{color: "#fff"}}>
            <TableRow>
              <TableCell className="px-3 py-3.5 text-left font-semibold text-white">
                #
              </TableCell>
              <TableCell className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                Date Time
              </TableCell>
              <TableCell className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                User
              </TableCell>
              <TableCell className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                Changes
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="border-2 border-b divide-y divide-x divide-gray-800">
            {activeDataSet.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                  {index + 1}
                </TableCell>
                <TableCell className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                  {item.dateTime}
                </TableCell>
                <TableCell className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                  {item.user}
                </TableCell>
                <TableCell className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                  {item.changes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ border: "1px solid #497380", color: "#497380" }}
          onClick={handleClose}
        >
          Back
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuditModal;
