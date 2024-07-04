import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import React from "react";
import { Modal, Box, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ViewPendingForm from "../components/pending/ViewPendingForm";
import Tabs from "../components/pending/Tabs";
import { Audio } from "react-loader-spinner";
import {
  EyeIcon,
  PencilSquareIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Pending() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [settlementID, setSettlementID] = useState();
  const [settlementInstructionPending, setSettlementInstructionPending] =
    useState([]);
  const [counterSettlementPending, setCounterSettlementPending] = useState([]);
  const [activeTab, setActiveTab] = useState("Self-owned");

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("jwtToken");
      if (!token) {
        navigate("/");
        return;
      }
      setLoading(true);

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

        const counterResponse = await fetch(
          "https://zentry-app.azurewebsites.net/api/zentry/counterParty/settlementInstructions/search",
          {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              settlementInstructionStatus: "PENDING",
            }),
          }
        );

        if (!response.ok || !counterResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const party = await response.json();
        const counterParty = await counterResponse.json();
        setSettlementInstructionPending(party);
        setCounterSettlementPending(counterParty);
        console.log("Party", party);
        console.log("Counter Party", counterParty);
      } catch (error) {
        console.log(error);
        navigate("/"); // Navigate to home or login page on error
      }
      setLoading(false);
    };

    fetchData();
  }, [navigate]);

  const handleEdit = (id) => {
    navigate(`/pending/edit/${id}`);
  };

  const handleView = (id) => {
    setSettlementID(id);
    navigate(`/pending/view/${settlementID}`)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update the active tab state
  };

  const tabs = [
    { name: "Self-owned", href: "#", current: activeTab === "Self-owned" },
    {
      name: "CounterParty owned",
      href: "#",
      current: activeTab === "CounterParty owned",
    },
  ];

  const activeDataSet =
    activeTab === "Self-owned"
      ? settlementInstructionPending
      : counterSettlementPending;

  return (
    <div>
      <Sidebar />
      <div className="lg:pl-64">
        <SearchBar />
        <main className="py-10 px-5">
          <div className="sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto p-5 bg-white rounded-md shadow">
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <CircularProgress />
                </div>
              ) : (
                <>
                  <div className="space-y-8 divide-y divide-gray-300">
                    <h2 className="text-lg leading-6 font-medium text-gray-900 border-b pb-8 flex flex-row">
                      <ExclamationCircleIcon
                        className="mr-3 h-6 w-6"
                        aria-hidden="true"
                      />{" "}
                      List of pending SSI Confirmations
                    </h2>
                  </div>
                  <div className="mt-8">
                    <Tabs tabs={tabs} onTabClick={handleTabClick} />
                  </div>

                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flow-root">
                      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pb-2">
                        <div className="inline-block min-w-full py-2 align-middle">
                          <table className="min-w-full divide-y divide-gray-300 border border-gray-800">
                            <thead className="bg-gray-800">
                              <tr>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                  Unique ID
                                </th>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                  Securities ID
                                </th>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                  Securities Name
                                </th>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                  Quantity
                                </th>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                  Party Account
                                </th>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                  Counter Party Account
                                </th>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                  Counter Party Domain
                                </th>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                  Party Settlement Instruction
                                </th>
                                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white text-center">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="border-2 border-b divide-y divide-x divide-gray-800">
                              {activeDataSet.map((item, index) => (
                                <tr key={item.settlementInstructionId}>
                                  <td className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                                    {index + 1}
                                  </td>
                                  <td className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                                    {item.securitiesId}
                                  </td>
                                  <td className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                                    {item.securitiesName}
                                  </td>
                                  <td className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                                    {item.amount}
                                  </td>
                                  <td className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                                    {item.accountCounterParty.accountName}
                                  </td>
                                  <td className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                                    {item.accountCounterParty.accountNo}
                                  </td>
                                  <td className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                                    {item.accountCounterParty.domain}
                                  </td>
                                  <td className="px-3 py-4 text-sm text-gray-900 border-r border-gray-800">
                                    {item.settlementInstructionParty.partyChain.map(
                                      (instruction, i) => (
                                        <span key={i}>
                                          {instruction.partyQualifier}
                                          <br />
                                        </span>
                                      )
                                    )}
                                  </td>
                                  <td className="pt-6 text-sm text-center flex flex-row justify-center items-center">
                                  <EyeIcon
                                  className="h-6 w-6 cursor-pointer text-brown-600 hover:text-brown-500 mx-1"
                                  aria-hidden="true"
                                  onClick={() => handleView(item.settlementInstructionId)}
                                />
                                <PencilSquareIcon
                                  className="h-6 w-6 cursor-pointer text-brown-600 hover:text-brown-500 mx-1"
                                  aria-hidden="true"
                                  onClick={() => handleEdit(item.settlementInstructionId)}
                                />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
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
  );
}
