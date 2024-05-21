import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function PendingForm({ onClose }) {
  const [inputs, setInputs] = useState({
    input1: "CGCTUS66",
    input2: "1234",
    input3: "B0FCU533LAX",
    input4: "ABCD",
    input5: "IRVTUS3NXXXX",
    input6: "XYZ",
    input7: "EGSP",
    input8: "",
    input9: "00987",
    input10: "",
    input11: "SICVFRPPXXXX",
    input12: "",
    input13: "MSNYUS33XXXX",
    input14: "9876",
    input15: "",
    input16: "",
    input17: "",
    input18: "",
    input19: "EGSP",
    input20: "",
    input21: "05678",
    input22: "",
    input23: "SICVFRPPXXXX",
    input24: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className="max-w-4xl mx-auto p-5 bg-white rounded-md shadow"
      style={{ maxHeight: "80vh", overflowY: "auto" }}
    >
      <form className="space-y-8 divide-y divide-gray-300">
        <div className="flex items-center justify-between">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Pending SSI Confirmation: UREF_1
          </h2>
          <IconButton
            aria-label="close"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4 mt-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Unique Reference
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl- text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 pl-3"
                  placeholder="UREF_1"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="account"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Account
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="account"
                id="account"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                placeholder="Account_1"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                placeholder="test1@test.com"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="isin"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ISIN
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="isin"
                id="isin"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                placeholder="ISIN_1"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Quantity
            </label>
            <div className="mt-2">
              <input
                id="quantity"
                name="quantity"
                type="number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                placeholder="100"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="SSI option"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              SSI Details
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>Select SSI from pre-configured list</option>
                <option>SSI 1</option>
                <option>SSI 2</option>
                <option>SSI 3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-10">
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            <Box
              sx={{
                flex: "1",
                minWidth: "0",
                display: "flex",
                gap: "14px",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  border: "1px solid lightgrey",
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
                  BUYR
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>96Q</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input1"
                    value={inputs.input1}
                    style={{
                      padding: "5px",
                      backgroundColor: "#e4efb6",
                      outline: "auto",
                      border: "none",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>Account</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input2"
                    value={inputs.input2}
                    style={{
                      padding: "5px",
                      backgroundColor: "#e4efb6",
                      outline: "auto",
                      border: "none",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  border: "1px solid lightgrey",
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
                  BUYR
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>95P</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input3"
                    value={inputs.input3}
                    style={{
                      padding: "5px",
                      backgroundColor: "#e4efb6",
                      outline: "auto",
                      border: "none",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>Account</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input4"
                    value={inputs.input4}
                    style={{
                      padding: "5px",
                      backgroundColor: "#e4efb6",
                      outline: "auto",
                      border: "none",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  border: "1px solid lightgrey",
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
                  BUYR
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>95P</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input5"
                    value={inputs.input5}
                    style={{
                      padding: "5px",
                      backgroundColor: "#e4efb6",
                      outline: "auto",
                      border: "none",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>Account</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input6"
                    value={inputs.input6}
                    style={{
                      padding: "5px",
                      backgroundColor: "#e4efb6",
                      outline: "auto",
                      border: "none",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  border: "1px solid lightgrey",
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
                  BUYR
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    flexWrap: "wrap",
                  }}
                >
                  <label style={{ width: "95px" }}>95R</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input7"
                    value={inputs.input7}
                    style={{
                      padding: "5px",
                      backgroundColor: "#e4efb6",
                      outline: "auto",
                      border: "none",
                      width: "80px",
                    }}
                  />
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input8"
                    value={inputs.input8}
                    style={{
                      padding: "5px",
                      backgroundColor: "#e4efb6",
                      outline: "auto",
                      border: "none",
                      width: "50px",
                    }}
                  />
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input9"
                    value={inputs.input9}
                    style={{
                      padding: "5px",
                      backgroundColor: "#e4efb6",
                      outline: "auto",
                      border: "none",
                      width: "70px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>Account</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input10"
                    value={inputs.input10}
                    style={{ padding: "5px", outline: "auto" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  border: "1px solid lightgrey",
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
                  BUYR
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>95P</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input11"
                    value={inputs.input11}
                    style={{
                      padding: "5px",
                      backgroundColor: "#e4efb6",
                      outline: "auto",
                      border: "none",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>Account</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input12"
                    value={inputs.input12}
                    style={{ padding: "5px", outline: "auto" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  padding: "5px 20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label>Confirm SSI</label>
                <input
                  onChange={handleInputChange}
                  type="checkbox"
                  name="confirm"
                  value=""
                  style={{ marginLeft: "5px" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                flex: "1",
                minWidth: "0",
                display: "flex",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  border: "1px solid lightgrey",
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
                  BUYR
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>95P</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input13"
                    value={inputs.input13}
                    style={{
                      padding: "5px",
                      backgroundColor: "#f4dcde",
                      outline: "auto",
                      border: "none",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>Account</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input14"
                    value={inputs.input14}
                    style={{
                      padding: "5px",
                      backgroundColor: "#f4dcde",
                      outline: "auto",
                      border: "none",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  border: "1px solid lightgrey",
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
                  BUYR
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>95P</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input15"
                    value={inputs.input15}
                    style={{ padding: "5px", outline: "auto" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>Account</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input16"
                    value={inputs.input16}
                    style={{ padding: "5px", outline: "auto" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  border: "1px solid lightgrey",
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
                  BUYR
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>95P</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input17"
                    value={inputs.input17}
                    style={{ padding: "5px", outline: "auto" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>Account</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input18"
                    value={inputs.input18}
                    style={{ padding: "5px", outline: "auto" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  border: "1px solid lightgrey",
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
                  BUYR
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5px",
                    flexWrap: "wrap",
                  }}
                >
                  <label style={{ width: "95px" }}>95R</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input19"
                    value={inputs.input19}
                    style={{
                      padding: "5px",
                      backgroundColor: "#f4dcde",
                      outline: "auto",
                      border: "none",
                      width: "80px",
                    }}
                  />
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input20"
                    value={inputs.input20}
                    style={{
                      border: "1px",
                      padding: "5px",
                      outline: "auto",
                      width: "60px",
                    }}
                  />
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input21"
                    value={inputs.input21}
                    style={{
                      padding: "5px",
                      backgroundColor: "#f4dcde",
                      outline: "auto",
                      border: "none",
                      width: "50px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>Account</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input22"
                    value={inputs.input22}
                    style={{ padding: "5px", outline: "auto" }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  border: "1px solid lightgrey",
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
                  BUYR
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>95P</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input23"
                    value={inputs.input23}
                    style={{
                      padding: "5px",
                      backgroundColor: "#f4dcde",
                      outline: "auto",
                      border: "none",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      md: "100px 200px",
                      sm: "80px 160px",
                    },
                  }}
                >
                  <label>Account</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="input24"
                    value={inputs.input24}
                    style={{ padding: "5px", outline: "auto" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </div>

        <div className="pt-8 flex justify-end">
          <button
            type="reset"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reset
          </button>
          <button
            type="reset"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-4"
          >
            Propose new C/P SSi
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Confirm SSI
          </button>
        </div>
      </form>
    </div>
  );
}
