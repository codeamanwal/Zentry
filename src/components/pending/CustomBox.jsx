import React from "react";
import { Box, Typography } from "@mui/material";
import DynamicInputField from "./Box";

const CustomBox = ({
  title,
  inputs,
  setInputs,
  fieldId,
  labelOptions,
  handleInputChange,
  index1,
  index2,
  selectOptions,
}) => {
    const getBorderColor = () => {
        if (title.includes("Proposed")) {
          return "lightgrey";
        }
        if (
          title.includes("SELL") ||
          title === "DECU" ||
          title === "DEI1" ||
          title === "DEAG" ||
          (title === "PSET" && fieldId === "PSET_2")
        ) {
          return "red";
        }
        return "#84cc16";
      };
    

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        border: `2px solid ${getBorderColor()}`,
        padding: "15px",
        position: "relative",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          backgroundColor: "#fff",
          fontSize: "11px",
          top: "-9px",
          padding: "0 5px",
        }}
      >
        {title}
      </Typography>
      <DynamicInputField
        inputs={inputs}
        setInputs={setInputs}
        fieldId={fieldId}
        labelOptions={labelOptions}
      />

      <Box
        sx={{
          display: "grid",
          gap: "5px",
          gridTemplateColumns: {
            md: "100px 200px",
            sm: "80px 160px",
          },
        }}
      >
        <label style={{ flex: "1 1 100px" }}>97A::SAFE</label>
        <input
          onChange={handleInputChange(fieldId, index2, fieldId.includes("proposed") ? true : false)}
          type="text"
          name={`${fieldId}_input${index2}`}
          value={inputs[index2]}
          style={{
            padding: "5px",
            backgroundColor: "#fff",
            border: "2px solid black",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: "5px",
          gridTemplateColumns: {
            md: "100px 200px",
            sm: "80px 160px",
          },
        }}
      >
        <select
          id={`${fieldId}_label`}
          name={`${fieldId}_label`}
          value={inputs[0]}
          onChange={handleInputChange(fieldId, 0)}
          style={{
            flex: "1 1 100px", // Adjust width dynamically
          }}
        >
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          onChange={handleInputChange(fieldId, 1)}
          type="text"
          name={`${fieldId}_input1`}
          value={inputs[1]}
          style={{ // Adjust width dynamically
            padding: "5px",
            backgroundColor: "#fff",
            border: "2px solid black",
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomBox;
