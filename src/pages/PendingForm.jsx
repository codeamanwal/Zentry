import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

export default function PendingForm() {
  const { settlementId } = useParams();
  const [data, setData] = useState({});

  // console.log('settlementId',settlementId)

  const [inputs1, setInputs1] = useState({
    BUYR: ["", "", ""],
    RECU: ["S", "", ""],
    REI1: ["R", "", ""],
    REAG: ["Q", "", "", "", ""],
    PSET_1: ["", "", ""],
    SELL: ["", "", ""],
    DECU: ["", "", ""],
    DEI1: ["", "", ""],
    DEAG: ["", "", "", ""],
    PSET_2: ["", "", ""],
  });

  const handleInputChange = (section, index) => (event) => {
    const { value } = event.target;
    console.log(value);
    setInputs1((prev) => {
      const newSection = [...prev[section]];
      newSection[index] = value;
      return { ...prev, [section]: newSection };
    });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("jwtToken");
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://zentry-app.azurewebsites.net/api/zentry/party/settlementInstructions/${settlementId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const settlementInstructionID = await response.json();

        console.log("settlementInstructionID", settlementInstructionID);
        setData(settlementInstructionID);
        setInputs1(populateStateFromData(settlementInstructionID));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const populateStateFromData = (data) => {
    const newState = { ...inputs1 };

    data.settlementInstructionParty.partyChain.forEach((party) => {
      const { partyQualifier, party: partyData } = party;
      if (newState[partyQualifier]) {
        newState[partyQualifier][0] = partyData.partyFormat || "";
        newState[partyQualifier][1] = partyData.identifierCode || "";
      }
    });

    data.settlementInstructionParty.proposedCounterPartyChain.forEach(
      (party) => {
        const { partyQualifier, party: partyData } = party;
        if (newState[partyQualifier]) {
          newState[partyQualifier][0] = partyData.partyFormat || "";
          newState[partyQualifier][1] = partyData.identifierCode || "";
        }
      }
    );

    return newState;
  };

  return (
    <>
      <div>
        <Sidebar />
        <div className="lg:pl-64">
          <SearchBar />
          <main className="py-10">
            <div
              className="max-w-4xl mx-auto p-5 bg-white rounded-md shadow"
              style={{ maxHeight: "80vh", overflowY: "auto" }}
            >
              <form className="space-y-8 divide-y divide-gray-300">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Pending SSI Confirmation: {data?.settlementInstructionId}
                  </h2>
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
                          placeholder={
                            data?.settlementInstructionId || "Loading..."
                          }
                          disabled
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
                        placeholder={
                          data?.accountParty?.accountName || "Loading..."
                        }
                        disabled
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
                        placeholder={
                          data?.contactParty?.emailId || "Loading..."
                        }
                        disabled
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
                        placeholder={data?.securitiesIdScheme || "Loading..."}
                        disabled
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
                        placeholder={data?.amount || "Loading..."}
                        disabled
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
                            gap: "5px",
                            gridTemplateColumns: {
                              md: "100px 200px",
                              sm: "80px 160px",
                            },
                          }}
                        >
                          <select
                            id="BUYR_label"
                            name="BUYR_label"
                            value={inputs1.BUYR[0]}
                            onChange={handleInputChange("BUYR", 0)}
                          >
                            <option value="P">95P</option>
                            <option value="Q">95Q</option>
                            <option value="R">95R</option>
                            <option value="S">95S</option>
                          </select>
                          <input
                            onChange={handleInputChange("BUYR", 1)}
                            type="text"
                            name="BUYR_input1"
                            value={inputs1.BUYR[1]}
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
                            gap: "5px",
                            gridTemplateColumns: {
                              md: "100px 200px",
                              sm: "80px 160px",
                            },
                          }}
                        >
                          <label>Account</label>
                          <input
                            onChange={handleInputChange("BUYR", 2)}
                            type="text"
                            name="BUYR_input2"
                            value={inputs1.BUYR[2]}
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
                          RECU
                        </Typography>
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
                            id="RECU_label"
                            name="RECU_label"
                            value={inputs1.RECU[0]}
                            onChange={handleInputChange("RECU", 0)}
                          >
                            <option value="P">95P</option>
                            <option value="Q">95Q</option>
                            <option value="R">95R</option>
                            <option value="S">95S</option>
                          </select>
                          <input
                            onChange={handleInputChange("RECU", 1)}
                            type="text"
                            name="RECU_input1"
                            value={inputs1.RECU[1]}
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
                            gap: "5px",
                            gridTemplateColumns: {
                              md: "100px 200px",
                              sm: "80px 160px",
                            },
                          }}
                        >
                          <label>Account</label>
                          <input
                            onChange={handleInputChange("RECU", 2)}
                            type="text"
                            name="RECU_input2"
                            value={inputs1.RECU[2]}
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
                          REI1
                        </Typography>
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
                            id="REI1_label"
                            name="REI1_label"
                            value={inputs1.REI1[0]}
                            onChange={handleInputChange("REI1", 0)}
                          >
                            <option value="P">95P</option>
                            <option value="Q">95Q</option>
                            <option value="R">95R</option>
                            <option value="S">95S</option>
                          </select>
                          <input
                            onChange={handleInputChange("REI1", 1)}
                            type="text"
                            name="REI1_input1"
                            value={inputs1.REI1[1]}
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
                            gap: "5px",
                            gridTemplateColumns: {
                              md: "100px 200px",
                              sm: "80px 160px",
                            },
                          }}
                        >
                          <label>Account</label>
                          <input
                            onChange={handleInputChange("REI1", 2)}
                            type="text"
                            name="REI1_input2"
                            value={inputs1.REI1[2]}
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
                          REAG
                        </Typography>
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
                            id="REAG_label"
                            name="REAG_label"
                            value={inputs1.REAG[0]}
                            onChange={handleInputChange("REAG", 0)}
                          >
                            <option value="P">95P</option>
                            <option value="Q">95Q</option>
                            <option value="R">95R</option>
                            <option value="S">95S</option>
                          </select>
                          <input
                            onChange={handleInputChange("REAG", 1)}
                            type="text"
                            name="REAG_input1"
                            value={
                              inputs1.REAG[1] + " " + 
                              inputs1.REAG[2] + " " +
                              inputs1.REAG[3]
                            }
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
                            gap: "5px",
                            gridTemplateColumns: {
                              md: "100px 200px",
                              sm: "80px 160px",
                            },
                          }}
                        >
                          <label>Account</label>
                          <input
                            onChange={handleInputChange("REAG", 4)}
                            type="text"
                            name="REAG_input4"
                            value={inputs1.REAG[4]}
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
                          PSET
                        </Typography>
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
                            id="PSET1_label"
                            name="PSET1_label"
                            value={inputs1.PSET_1[0]}
                            onChange={handleInputChange("PSET_1", 0)}
                          >
                            <option value="P">95P</option>
                            <option value="Q">95Q</option>
                            <option value="R">95R</option>
                            <option value="S">95S</option>
                          </select>
                          <input
                            onChange={handleInputChange("PSET_1", 1)}
                            type="text"
                            name="PSET1_input1"
                            value={inputs1.PSET_1[1]}
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
                            gap: "5px",
                            gridTemplateColumns: {
                              md: "100px 200px",
                              sm: "80px 160px",
                            },
                          }}
                        >
                          <label>Account</label>
                          <input
                            onChange={handleInputChange("PSET_1", 2)}
                            type="text"
                            name="PSET1_input2"
                            value={inputs1.PSET_1[2]}
                            style={{ padding: "5px", outline: "auto" }}
                          />
                        </Box>
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
                          SELL
                        </Typography>
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
                            id="SELL_label"
                            name="SELL_label"
                            value={inputs1.SELL[0]}
                            onChange={handleInputChange("SELL", 0)}
                          >
                            <option value="P">95P</option>
                            <option value="Q">95Q</option>
                            <option value="R">95R</option>
                            <option value="S">95S</option>
                          </select>
                          <input
                            onChange={handleInputChange("SELL", 1)}
                            type="text"
                            name="SELL_input1"
                            value={inputs1.SELL[1]}
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
                            gap: "5px",
                            gridTemplateColumns: {
                              md: "100px 200px",
                              sm: "80px 160px",
                            },
                          }}
                        >
                          <label>Account</label>
                          <input
                            onChange={handleInputChange("SELL", 2)}
                            type="text"
                            name="SELL_input2"
                            value={inputs1.SELL[2]}
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
                          margin: "4px 0 0 0",
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
                          DECU
                        </Typography>
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
                            id="DECU_label"
                            name="DECU_label"
                            value={inputs1.DECU[0]}
                            onChange={handleInputChange("DECU", 0)}
                          >
                            <option value="P">95P</option>
                            <option value="Q">95Q</option>
                            <option value="R">95R</option>
                            <option value="S">95S</option>
                          </select>
                          <input
                            onChange={handleInputChange("DECU", 1)}
                            type="text"
                            name="DECU_input1"
                            value={inputs1.DECU[1]}
                            style={{ padding: "5px", outline: "auto" }}
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
                          <label>Account</label>
                          <input
                            onChange={handleInputChange("DECU", 2)}
                            type="text"
                            name="DECU_input2"
                            value={inputs1.DECU[2]}
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
                          margin: "4px 0 0 0",
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
                          DEI1
                        </Typography>
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
                            id="DEI1_label"
                            name="DEI1_label"
                            value={inputs1.DEI1[0]}
                            onChange={handleInputChange("DEI1", 0)}
                          >
                            <option value="P">95P</option>
                            <option value="Q">95Q</option>
                            <option value="R">95R</option>
                            <option value="S">95S</option>
                          </select>
                          <input
                            onChange={handleInputChange("DEI1", 1)}
                            type="text"
                            name="DEI1_input1"
                            value={inputs1.DEI1[1]}
                            style={{ padding: "5px", outline: "auto" }}
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
                          <label>Account</label>
                          <input
                            onChange={handleInputChange("DEI1", 2)}
                            type="text"
                            name="DEI1_input2"
                            value={inputs1.DEI1[2]}
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
                          margin: "4px 0 0 0",
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
                          DEAG
                        </Typography>
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
                            id="DEAG_label"
                            name="DEAG_label"
                            value={inputs1.DEAG[0]}
                            onChange={handleInputChange("DEAG", 0)}
                          >
                            <option value="P">95P</option>
                            <option value="Q">95Q</option>
                            <option value="R">95R</option>
                            <option value="S">95S</option>
                          </select>
                          <input
                            onChange={handleInputChange("DEAG", 1)}
                            type="text"
                            name="DEAG_input1"
                            value={inputs1.DEAG[1] + " " + 
                            inputs1.DEAG[2] + " " +
                            inputs1.DEAG[3]}
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
                            gap: "5px",
                            gridTemplateColumns: {
                              md: "100px 200px",
                              sm: "80px 160px",
                            },
                          }}
                        >
                          <label>Account</label>
                          <input
                            onChange={handleInputChange("DEAG", 4)}
                            type="text"
                            name="DEAG_input4"
                            value={inputs1.DEAG[4]}
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
                          margin: "4px 0 0 0",
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
                          PSET
                        </Typography>
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
                            id="PSET2_label"
                            name="PSET2_label"
                            value={inputs1.PSET_2[0]}
                            onChange={handleInputChange("PSET_2", 0)}
                          >
                            <option value="P">95P</option>
                            <option value="Q">95Q</option>
                            <option value="R">95R</option>
                            <option value="S">95S</option>
                          </select>
                          <input
                            onChange={handleInputChange("PSET_2", 1)}
                            type="text"
                            name="PSET2_input1"
                            value={inputs1.PSET_2[1]}
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
                            gap: "5px",
                            gridTemplateColumns: {
                              md: "100px 200px",
                              sm: "80px 160px",
                            },
                          }}
                        >
                          <label>Account</label>
                          <input
                            onChange={handleInputChange("PSET_2", 2)}
                            type="text"
                            name="PSET2_input2"
                            value={inputs1.PSET_2[2]}
                            style={{ padding: "5px", outline: "auto" }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      padding: "5px",
                      display: "flex",
                      alignItems: "center",
                      margin: "10px 0 0 0",
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
          </main>
        </div>
      </div>
    </>
  );
}
