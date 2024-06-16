import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditAccountModal from "./EditAccountModal";

function AccountDetails({ party, counterParty }) {
  const [open, setOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState({
    data: '',
    type: ''
  });

  const [partyInputs, setPartyInputs] = useState({
    accountName: '',
    accountNumber: '',
    domain: '',
    emailId: '',
    phoneNo: '',
    faxNo: ''
  });

  const [counterInputs, setCounterInputs] = useState({
    accountName: '',
    accountNumber: '',
    domain: '',
    emailId: '',
    phoneNo: '',
    faxNo: ''
  });

  useEffect(() => {
    if (party) {
      setPartyInputs({
        accountName: party.accountParty?.accountName || '',
        accountNumber: party.accountParty?.accountNo || '',
        domain: party.accountParty?.domain || '',
        emailId: party.contactParty?.emailId || '',
        phoneNo: party.contactParty?.phoneNo || '',
        faxNo: party.contactParty?.faxNo || ''
      });
    }
  }, [party]);

  useEffect(() => {
    if (counterParty) {
      setCounterInputs({
        accountName: counterParty.accountCounterParty?.accountName || '',
        accountNumber: counterParty.accountCounterParty?.accountNo || '',
        domain: counterParty.accountCounterParty?.domain || '',
        emailId: counterParty.contactCounterParty?.emailId || '',
        phoneNo: counterParty.contactCounterParty?.phoneNo || '',
        faxNo: counterParty.contactCounterParty?.faxNo || ''
      });
    }
  }, [counterParty]);

  const handleClickOpen = (account, type) => {
    setSelectedAccount({
      data: account,
      type: type
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAccount({ data: '', type: '' });
  };

  const handleSave = (updatedInputs, type) => {
    if (type === "party") {
      setPartyInputs(updatedInputs);
    } else if (type === "counterParty") {
      setCounterInputs(updatedInputs);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          border: "2px solid #84cc16",
          padding: "15px",
          margin: "10px",
          position: "relative",
          minWidth: "300px",
          maxWidth: "50%",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            backgroundColor: "#fff",
            fontSize: "11px",
            top: "-9px",
            left: "15px",
            padding: "0 5px",
          }}
        >
          Party
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "start",
          }}
        >
          <Box>
            <Typography variant="body2">Account No</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={partyInputs.accountNumber}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Domain</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={partyInputs.domain}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Account Owner</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={partyInputs.accountName}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Contact</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "8px" }}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={partyInputs.emailId}
                label="Email"
                InputProps={{ readOnly: true }}
              />
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={partyInputs.phoneNo}
                label="Phone"
                InputProps={{ readOnly: true }}
              />
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={partyInputs.faxNo}
                label="Fax"
                InputProps={{ readOnly: true }}
              />
            </Box>
          </Box>
        </Box>
        <IconButton sx={{ position: "absolute", top: "10px", right: "10px" }} onClick={() => handleClickOpen(partyInputs, "party")}>
          <EditIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          border: "2px solid red",
          padding: "15px",
          margin: "10px",
          position: "relative",
          minWidth: "300px",
          maxWidth: "50%",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            backgroundColor: "#fff",
            fontSize: "11px",
            top: "-9px",
            left: "15px",
            padding: "0 5px",
          }}
        >
          CounterParty
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "start",
          }}
        >
          <Box>
            <Typography variant="body2">Account No</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={counterInputs.accountNumber}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Domain</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={counterInputs.domain}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Account Owner</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={counterInputs.accountName}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Contact</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "8px" }}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={counterInputs.emailId}
                label="Email"
                InputProps={{ readOnly: true }}
              />
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={counterInputs.phoneNo}
                label="Phone"
                InputProps={{ readOnly: true }}
              />
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={counterInputs.faxNo}
                label="Fax"
                InputProps={{ readOnly: true }}
              />
            </Box>
          </Box>
        </Box>
        <IconButton sx={{ position: "absolute", top: "10px", right: "10px" }} onClick={() => handleClickOpen(counterInputs, "counterParty")}>
          <EditIcon />
        </IconButton>
      </Box>

      <EditAccountModal open={open} handleClose={handleClose} selectedAccount={selectedAccount.data} onSave={handleSave} type={selectedAccount.type} />
    </Box>
  );
}

export default AccountDetails;
