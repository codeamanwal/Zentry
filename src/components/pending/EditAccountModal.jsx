import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
} from "@mui/material";

function EditAccountModal({
  open,
  handleClose,
  selectedAccount,
  onSave,
  type,
}) {
  const [inputs, setInputs] = useState({
    accountNo: "",
    accountName: "",
    domain: "",
    emailId: "",
    phoneNo: "",
    faxNo: "",
  });

  useEffect(() => {
    if (selectedAccount) {
      setInputs({
        accountNo: selectedAccount.accountNumber || "",
        accountName: selectedAccount.accountName || "",
        domain: selectedAccount.domain || "",
        emailId: selectedAccount.emailId || "",
        phoneNo: selectedAccount.phoneNo || "",
        faxNo: selectedAccount.faxNo || "",
      });
    }
  }, [selectedAccount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(inputs, type);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ backgroundColor: "#497380" }}>
        {type === "party"
          ? "Party"
          : type === "counterParty"
          ? "Counter Party"
          : ""}
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6" sx={{ marginTop: "20px" }}>
          Update Account
        </Typography>
        <TextField
          margin="dense"
          label="Account No"
          name="accountNo"
          type="text"
          fullWidth
          value={inputs.accountNo}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Account Owner"
          name="accountName"
          type="text"
          fullWidth
          value={inputs.accountName}
          onChange={handleChange}
        />
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Update Contact
        </Typography>
        <TextField
          margin="dense"
          label="Email"
          name="emailId"
          type="email"
          fullWidth
          value={inputs.emailId}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Phone No"
          name="phoneNo"
          type="text"
          fullWidth
          value={inputs.phoneNo}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Fax No"
          name="faxNo"
          type="text"
          fullWidth
          value={inputs.faxNo}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button sx={{border: "1px solid #497380", color: "#497380"}}onClick={handleClose}>Cancel</Button>
        <Button sx={{border: "1px solid #497380", color: "#497380"}}onClick={handleClose}>Reset</Button>
        <Button sx={{backgroundColor: "#497380", color: "white"}}onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditAccountModal;
