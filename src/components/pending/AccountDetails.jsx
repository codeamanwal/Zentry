import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function AccountDetails({ party, counterParty }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between"}}>
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
            gridTemplateColumns: "150px 1fr", // Adjusted for better spacing
            alignItems: "center",
          }}
        >
          <Typography variant="body2">Account No</Typography>
          <Typography variant="body2">{party.accountNo}</Typography>
          <Typography variant="body2">Account Owner</Typography>
          <Typography variant="body2">{party.owner}</Typography>
          <Typography variant="body2">Domain</Typography>
          <Typography variant="body2">{party.domain}</Typography>
          <Typography variant="body2">Contact</Typography>
          <Typography variant="body2">{party.contactEmail}</Typography>
          <Typography variant="body2">{party.contactPhone}</Typography>
        </Box>
        <IconButton
          sx={{ position: "absolute", top: "10px", right: "10px" }}
        >
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
            gridTemplateColumns: "150px 1fr",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">Account No</Typography>
          <Typography variant="body2">{counterParty.accountNo}</Typography>
          <Typography variant="body2">Account Owner</Typography>
          <Typography variant="body2">{counterParty.owner}</Typography>
          <Typography variant="body2">Domain</Typography>
          <Typography variant="body2">{counterParty.domain}</Typography>
          <Typography variant="body2">Contact</Typography>
          <Typography variant="body2">{counterParty.contactEmail}</Typography>
          <Typography variant="body2">{counterParty.contactPhone}</Typography>
        </Box>
        <IconButton
          sx={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <EditIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default AccountDetails;
