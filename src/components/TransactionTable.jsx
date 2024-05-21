import React, { useState } from "react";
import AuditTrailModal from "./AuditTrailModal";

const transactions = [
  {
    id: 1,
    uniqueRef: "UREF_1",
    account: "Account_1",
    email: "test1@test.com",
    isin: "ISIN_1",
    status: "Confirmed",
    settlementInstruction: "REAG: REAG1\nPSET: PSET1",
    quantity: 10,
  },
  {
    id: 2,
    uniqueRef: "UREF_2",
    account: "Account_2",
    email: "test1@test.com",
    isin: "ISIN_2",
    status: "Confirmed",
    settlementInstruction: "DEAG: \nPSET: ",
    quantity: 100,
  },
  {
    id: 3,
    uniqueRef: "UREF_3",
    account: "Account_3",
    email: "test1@test.com",
    isin: "ISIN_3",
    status: "Confirmed",
    settlementInstruction: "PSET: PSET3",
    quantity: 10000,
  },
  {
    id: 4,
    uniqueRef: "UREF_4",
    account: "Account_4",
    email: "test1@test.com",
    isin: "ISIN_4",
    status: "Cancelled",
    settlementInstruction: "RECU\nREAG\nPSET",
    quantity: 5,
  },
];

export default function TransactionTable() {
  const [modalData, setModalData] = useState(null);

  const handleClick = (transaction) => {
    setModalData({
      uniqueRef: transaction.uniqueRef,
      dateTime: "25.09.2023 01:00:01",
      userId: transaction.email,
      action: "Updated Data",
      actionDetails: "RECU: '' -> 'RECU_1'",
    });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
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
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="cursor-pointer"
                    onClick={() => handleClick(transaction)}
                  >
                    <td className="px-3 py-4 text-sm text-gray-900">
                      {transaction.id}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {transaction.uniqueRef}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {transaction.account}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {transaction.email}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {transaction.isin}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {transaction.status}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {transaction.settlementInstruction}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {transaction.quantity}
                    </td>
                    <td className="px-3 py-4 text-sm text-right">
                      <button className="rounded-md bg-brown-600 px-3 py-1 text-sm font-semibold text-white hover:bg-brown-500">
                        Audit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {modalData && (
          <AuditTrailModal
            data={modalData}
            onClose={() => setModalData(null)}
          />
        )}
      </div>
    </div>
  );
}
