import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Pending() {
  const navigate = useNavigate();
  

  const transactions = [
    {
      id: 1,
      uniqueRef: "UREF_1",
      account: "Account_1",
      email: "test1@test.com",
      isin: "ISIN_1",
      quantity: 10,
    },
    {
      id: 2,
      uniqueRef: "UREF_2",
      account: "Account_2",
      email: "test2@test.com",
      isin: "ISIN_2",
      quantity: 100,
    },
  ];

  const handleEdit = () => {
    const id = localStorage.getItem("id")
    navigate(`/pending/edit/${id}`);
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
                  <tbody>
                    {transactions.map((item) => (
                      <tr key={item.id}>
                        <td className="px-3 py-4 text-sm text-gray-900">
                          {item.id}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900">
                          {item.uniqueRef}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900">
                          {item.account}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900">
                          {item.email}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900">
                          {item.isin}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-900">
                          {item.quantity}
                        </td>
                        <td className="px-3 py-4 text-sm text-right">
                          <Button
                            className="rounded-md bg-brown-600 px-3 py-1 text-sm font-semibold text-white hover:bg-brown-500"
                            onClick={() => handleEdit(item.id)}
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
          </main>
        </div>
      </div>
    </>
  );
}
