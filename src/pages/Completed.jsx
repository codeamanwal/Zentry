import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import React from "react";
import { Modal, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ViewCompletedForm from "../components/completed/ViewCompletedForm";
import Tabs from "../components/pending/Tabs";
import { EyeIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import AuditModal from "../components/completed/AuditModal";

export default function Completed() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [settlementID, setSettlementID] = useState();
  const [activeTab, setActiveTab] = useState("Self-owned");

  const settlementInstructionCompleted = [
    {
      settlementInstructionId: 1,
      securitiesId: "CH1234567",
      securitiesName: "test sec 1",
      amount: 10,
      accountCounterParty: {
        accountName: "acc_p_1",
        accountNo: "acc_cp_1",
        domain: "domain1.com",
      },
      status: "Completed",
      settlementInstructionParty: {
        partyChain: [{ partyQualifier: "Instruction 1" }],
      },
    },
    {
      settlementInstructionId: 2,
      securitiesId: "12345678",
      securitiesName: "test sec 2",
      amount: 20,
      accountCounterParty: {
        accountName: "acc_p_2",
        accountNo: "acc_cp_2",
        domain: "domain2.com",
      },
      status: "Cancelled",
      settlementInstructionParty: {
        partyChain: [{ partyQualifier: "Instruction 2" }],
      },
    },
    {
      settlementInstructionId: 3,
      securitiesId: "DE123757989",
      securitiesName: "test sec 3",
      amount: 5,
      accountCounterParty: {
        accountName: "acc_p_1",
        accountNo: "acc_cp_3",
        domain: "domain3.com",
      },
      status: "Cancelled",
      settlementInstructionParty: {
        partyChain: [{ partyQualifier: "Instruction 3" }],
      },
    },
    {
      settlementInstructionId: 4,
      securitiesId: "US8787449878",
      securitiesName: "test sec 4",
      amount: 1100,
      accountCounterParty: {
        accountName: "acc_p_3",
        accountNo: "acc_cp_4",
        domain: "domain4.com",
      },
      status: "Completed",
      settlementInstructionParty: {
        partyChain: [{ partyQualifier: "Instruction 4" }],
      },
    },
  ];

  const handleView = (id) => {
    setSettlementID(id);
    navigate("/completed/view/664bc426f5aa2760a92c3fb2");
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

  const handleAudit = (id) => {
    setSettlementID(id);
    setOpen(true)
  };

  const activeDataSet = settlementInstructionCompleted;

  return (
    <div>
      <Sidebar />
      <div className="lg:pl-64">
        <SearchBar />
        <main className="py-10">
          <div className="sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto p-5 bg-white rounded-md shadow">
              <div className="space-y-8 divide-y divide-gray-300">
                <h2 className="text-lg leading-6 font-medium text-gray-900 border-b pb-8">
                  List of completed SSI Confirmations
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
                              Status
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
                                {item.status}
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
                              <td className="py-4 text-sm text-center flex flex-row justify-center items-center">
                                <div
                                  className="cursor-pointer m-2"
                                  onClick={() =>
                                    handleView(item.settlementInstructionId)
                                  }
                                >
                                  <EyeIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </div>
                                <div
                                  className="cursor-pointer m-2"
                                  onClick={() =>
                                    handleAudit(item.settlementInstructionId)
                                  }
                                >
                                  <img className="h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABgElEQVR4nO2W30oCQRTGf11kF+l7GAZRQX+8qDeInqR6jyJJDXqLLqKL6ikie4OKLsMs1JKJA9/StKir7mQkfnAuZuabPb85Z3ZZmGp07QPPij3GrF3AxWInZAI3YGwCxSH8wQEi/RqAr0Efkmbv/wBwI5R7MgDSaArgJuIOuL8GSKOxAhSAElADGsC797xCGgCXUOYMUAE++7SlA5SBudAAGeBGc00lWQfmFRuCa8lzrT3BWlCR/wFY6uNbBh7lrYQCKKjszYTkkVZUCWvHYgiAkrwnCb4thamqPeUQAPfyrmlsPT8AZmLJG4q87oTT3tQAdXmzGl9qfCaIbSX253Iav4UEyMVOa3PnXZLjAdRDANTktdcukn/qeHL0M2vzdyEAjnu8VhFEPLnpVHuOkgCGiZbec1/5LslXgTbwofVgAE4fmThEPPmTvFa5YLJv+4VXiar6nFUUVfa2PFfAbLj03xDWUyttrwrZmp08eHJfC8AhcAu8AK+67QZnaz/0Bba+MmEyxIjrAAAAAElFTkSuQmCC" />
                                </div>
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
            <AuditModal
              uniqueId={settlementID}
              open={open}
              handleClose={handleClose}
              selectedAccount={null}
              onSave={(comments) => console.log(comments)}
              type="party"
              user="test1@test.com"
            />
          </Box>
        </Modal>
      </div>
    </div>
  );
}
