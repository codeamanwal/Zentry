import React from "react";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function AccountDetails({ party, counterParty }) {
  console.log("party", party);
  console.log("counter", counterParty);
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
          minWidth: "300px", // Ensure minimum width for responsiveness
          maxWidth: "45%", // Adjusted for better spacing on larger screens
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
              value={party?.accountParty?.accountNo || "Loading..."}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Domain</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={party?.accountParty?.domain || "Loading..."}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Account Owner</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={party?.accountParty?.accountName || "Loading..."}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Contact</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "8px" }}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={party?.contactParty?.emailId || "Loading..."}
                label="Email"
                InputProps={{ readOnly: true }}
              />
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={party?.contactParty?.phoneNo || "Loading..."}
                label="Phone"
                InputProps={{ readOnly: true }}
              />
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={party?.contactParty?.faxNo || "Loading..."}
                label="Fax"
                InputProps={{ readOnly: true }}
              />
            </Box>
          </Box>
        </Box>
        <IconButton sx={{ position: "absolute", top: "10px", right: "10px" }}>
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
          minWidth: "300px", // Ensure minimum width for responsiveness
          maxWidth: "45%", // Adjusted for better spacing on larger screens
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
              value={counterParty?.accountCounterParty?.accountNo || "Loading..."}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Domain</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={counterParty?.accountCounterParty?.domain || "Loading..."}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Account Owner</Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={counterParty?.accountCounterParty?.accountName || "Loading..."}
              InputProps={{ readOnly: true }}
            />
          </Box>
          <Box>
            <Typography variant="body2">Contact</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", padding: "8px" }}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={counterParty?.contactCounterParty?.emailId || "Loading..."}
                label="Email"
                InputProps={{ readOnly: true }}
              />
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={counterParty?.contactCounterParty?.phoneNo || "Loading..."}
                label="Phone"
                InputProps={{ readOnly: true }}
              />
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={counterParty?.contactCounterParty?.faxNo || "Loading..."}
                label="Fax"
                InputProps={{ readOnly: true }}
              />
            </Box>
          </Box>
        </Box>
        <IconButton sx={{ position: "absolute", top: "10px", right: "10px" }}>
          <EditIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default AccountDetails;
