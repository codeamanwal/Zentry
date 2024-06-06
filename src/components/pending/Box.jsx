import React from "react";
import Box from "@mui/material/Box";

function DynamicInputField({ inputs, setInputs, fieldId, labelOptions }) {
  const handleInputChange = (index) => (event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gap: "5px",
        gridTemplateColumns: {
          md: "100px 200px",
          sm: "80px 160px",
        }, // Ensures the label and inputs are in separate columns
        alignItems: "start", // Aligns items at the start of each row
      }}
    >
      <select
        id={`${fieldId}_label`}
        name={`${fieldId}_label`}
        value={inputs[0]}
        onChange={handleInputChange(0)}
      >
        {labelOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Creates a new column for inputs */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {/* Conditional rendering for each type */}
        {inputs[0] === "P" && (
          <input
            onChange={handleInputChange(1)}
            type="text"
            name={`${fieldId}_input1`}
            value={inputs[1] || ""}
            style={{
              padding: "5px",
              backgroundColor: "#fff",
              border: "2px solid black",
            }}
          />
        )}

        {inputs[0] === "R" && (
          <>
            <input
              onChange={handleInputChange(1)}
              type="text"
              name={`${fieldId}_input1`}
              value={inputs[1] || ""}
              style={{
                padding: "5px",
                backgroundColor: "#fff",
                border: "2px solid black",
              }}
            />
            <input
              onChange={handleInputChange(2)}
              type="text"
              name={`${fieldId}_input2`}
              value={inputs[2] || ""}
              style={{
                padding: "5px",
                backgroundColor: "#fff",
                border: "2px solid black",
              }}
            />
          </>
        )}

        {inputs[0] === "Q" &&
          Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              onChange={handleInputChange(index + 1)}
              type="text"
              name={`${fieldId}_input${index + 1}`}
              value={inputs[index + 1] || ""}
              style={{
                padding: "5px",
                backgroundColor: "#fff",
                border: "2px solid black",
              }}
            />
          ))}

        {inputs[0] === "S" && (
          <input
            onChange={handleInputChange(1)}
            type="text"
            name={`${fieldId}_input1`}
            value={inputs[1] || ""}
            style={{
              padding: "5px",
              backgroundColor: "#fff",
              border: "2px solid black",
            }}
          />
        )}
      </Box>
    </Box>
  );
}

export default DynamicInputField;
