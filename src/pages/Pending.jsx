import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import React from "react";
import { Modal, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ViewPendingForm from "../components/ViewPendingForm";

export default function Pending() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [settlementID, setSettlementID] = useState();
  const [settlementInstructionPending, setSettlementInstructionPending] =
    useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("jwtToken");
      // console.log("token", token);
      if (!token) {
        navigate("/");
      }
      try {
        const response = await fetch(
          "https://zentry-app.azurewebsites.net/api/zentry/party/settlementInstructions/search",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              settlementInstructionStatus: "PENDING",
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Authentication Fault");
        }

        const settlementInstructionPending = await response.json();
        // console.log("settlementInstructionPending",settlementInstructionPending);
        setSettlementInstructionPending(settlementInstructionPending);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const transactions = [
  //   {
  //     id: 1,
  //     uniqueRef: "UREF_1",
  //     account: "Account_1",
  //     email: "test1@test.com",
  //     isin: "ISIN_1",
  //     quantity: 10,
  //   },
  //   {
  //     id: 2,
  //     uniqueRef: "UREF_2",
  //     account: "Account_2",
  //     email: "test2@test.com",
  //     isin: "ISIN_2",
  //     quantity: 100,
  //   },
  // ];

  const handleEdit = (id) => {
    // const id = localStorage.getItem("id");
    navigate(`/pending/edit/${id}`);
  };

  const handleView = (id) => {
    setSettlementID(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Sidebar />
        <div className="lg:pl-72">
          <SearchBar />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto p-5 bg-white rounded-md shadow">
                <div className="space-y-8  divide-y divide-gray-300">
                  <h2 className="text-lg leading-6 font-medium text-gray-900 border-b pb-8">
                    List of pending SSI Confirmations
                  </h2>
                </div>
                <div className="px-4 sm:px-6 lg:px-8">
                  <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle"></div>
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-200">
                          <tr>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              ID
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Unique Ref
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Account
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              ISIN
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Status
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Settlement Instruction
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 text-center"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {settlementInstructionPending &&
                            settlementInstructionPending.map((item, index) => (
                              <tr key={item.settlementInstructionId}>
                                <td className="px-3 py-4 text-sm text-gray-900">
                                  {index + 1}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-900">
                                  {"..." +
                                    item.settlementInstructionId.slice(-5)}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-900">
                                  {item.accountParty.accountName}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-900">
                                  {item.contactParty.emailId}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-900">
                                  {item.securitiesId}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-500">
                                  {item.settlementInstructionStatus}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-500">
                                  {item.settlementInstructionParty.partyChain.map(
                                    (instruction, i) => (
                                      <span key={i}>
                                        {instruction.partyQualifier}
                                        <br />
                                      </span>
                                    )
                                  )}
                                </td>
                                <td className="px-3 py-4 text-sm text-gray-900">
                                  {item.amount}
                                </td>
                                <td className="px-3 py-4 text-sm text-center flex flex-col">
                                  <Button
                                    className="rounded-md bg-brown-600 px-3 py-1 text-sm font-semibold text-white hover:bg-brown-500"
                                    onClick={() =>
                                      handleView(item.settlementInstructionId)
                                    }
                                  >
                                    View
                                  </Button>
                                  <Button
                                    className="rounded-md bg-brown-600 px-3 py-1 text-sm font-semibold text-white hover:bg-brown-500"
                                    onClick={() =>
                                      handleEdit(item.settlementInstructionId)
                                    }
                                  >
                                    Edit
                                  </Button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <ViewPendingForm
                settlementId={settlementID}
                onClose={handleClose}
              />
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
}
