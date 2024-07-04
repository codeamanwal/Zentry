import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar";
import AccountDetails from "./AccountDetails";
import CustomBox from "./CustomBoxView";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import CommentsBox from "./CommentBox";
import PendingSSIConfirmModal from "./PendingSSIConfirmModal"; // Ensure this import is correct

export default function ViewPendingForm() {
  const { settlementId } = useParams();
  const [data, setData] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [ssiType, setSsiType] = useState(""); // Added to manage which SSI type
  const partyCommentsData = [
    {
      date: "02.06.2024 08:00:01",
      user: "user@credit-suisse.com",
      text: "jhhfjhm jhfjdhf hgsjhi jhjdc",
    },
    {
      date: "01.06.2024 15:10:01",
      user: "user_2@credit-suisse.com",
      text: ",mkjjlmkjvij jhkdj jjhkvjkv",
    },
  ];

  const counterPartyCommentsData = [
    {
      date: "02.06.2024 09:00:01",
      user: "user@ubs.com",
      text: "öcöpcopölö lllklk o öp",
    },
    {
      date: "01.06.2024 14:10:01",
      user: "user_1@ubs.com",
      text: "llkjoijoklkjc ijockl jc jjokclc",
    },
  ];

  const currentUser = "current_user@credit-suisse.com"; // Statically set for now
  const isPartySide = true;

  const [buyInputs, setBuyInputs] = useState({
    BUYR: ["P", "", ""],
    RECU: ["P", "", ""],
    REI1: ["P", "", ""],
    REAG: ["P", "", "", "", ""],
    PSET: ["P", "", ""],
    proposed_BUYR: ["P", "", ""],
    proposed_RECU: ["P", "", ""],
    proposed_REI1: ["P", "", ""],
    proposed_REAG: ["P", "", "", "", ""],
    proposed_PSET: ["P", "", ""],
  });

  const [sellInputs, setSellInputs] = useState({
    SELL: ["P", "", ""],
    DECU: ["P", "", ""],
    DEI1: ["P", "", ""],
    DEAG: ["P", "", "", ""],
    PSET: ["P", "", ""],
    proposed_SELL: ["P", "", ""],
    proposed_DECU: ["P", "", ""],
    proposed_DEI1: ["P", "", ""],
    proposed_DEAG: ["P", "", "", ""],
    proposed_PSET: ["P", "", ""],
  });

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
        setBuyInputs(populateStateFromData(settlementInstructionID, true));
        setSellInputs(populateStateFromData(settlementInstructionID, false));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const populateStateFromData = (data, isBuy) => {
    const newState = isBuy ? { ...buyInputs } : { ...sellInputs };

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
        if (newState[`proposed_${partyQualifier}`]) {
          newState[`proposed_${partyQualifier}`][0] =
            partyData.partyFormat || "";
          newState[`proposed_${partyQualifier}`][1] =
            partyData.identifierCode || "";
        }
      }
    );

    return newState;
  };

  const handleCheckboxChange = (type) => () => {
    setSsiType(type);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSave = (comments) => {
    // Logic to save the comments or any other data handling
    console.log("Saved comments:", comments);
    setModalOpen(false);
  };

  return (
    <>
      <div>
        <Sidebar />
        <div className="lg:pl-64">
          <SearchBar />
          <main className="py-20 px-5">
            <div
              className="max-w-9xl mx-auto p-5 bg-white rounded-md shadow overflow-auto"
              style={{ maxHeight: "80vh", overflowY: "auto" }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg leading-6 font-medium text-gray-900 flex flex-row">
                    <ExclamationCircleIcon
                      className="mr-3 h-6 w-6"
                      aria-hidden="true"
                    />{" "}
                    Pending SSI Confirmation: {data?.settlementInstructionId}
                  </h2>
                </div>
                <div className="px-4 py-5 bg-white sm:p-6max-w-7xl">
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                    <div className="flex flex-row justify-center col-span-2 items-center">
                      <label
                        htmlFor="securitiesId"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Securities ID
                      </label>
                      <div className="">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="ml-4 pl-1 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          disabled
                        >
                          <option>ISIN</option>
                          <option>SSI 1</option>
                          <option>SSI 2</option>
                          <option>SSI 3</option>
                        </select>
                      </div>

                      <input
                        type="text"
                        name="securitiesId"
                        id="securitiesId"
                        autoComplete="securities-id"
                        className="ml-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 border-black block w-full shadow-sm sm:text-sm border rounded-md"
                        value={data?.settlementInstructionId || "Loading..."}
                        disabled
                      />
                    </div>

                    <div className="flex flex-row justify-center col-span-2 items-center">
                      <label
                        htmlFor="currency"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Currency
                      </label>
                      <input
                        type="text"
                        name="currency"
                        id="currency"
                        autoComplete="currency"
                        className="ml-4 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border rounded-md"
                        value={data?.currency || "Loading..."}
                        disabled
                      />
                    </div>

                    <div className="flex flex-row justify-center col-span-2 items-center">
                      <label
                        htmlFor="securitiesName"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Securities Name
                      </label>
                      <input
                        type="text"
                        name="securitiesName"
                        id="securitiesName"
                        autoComplete="securities-name"
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border rounded-md"
                        value={data?.securitiesName || "Loading..."}
                        disabled
                      />
                    </div>

                    <div className="flex flex-row justify-center col-span-2 items-center">
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        autoComplete="quantity"
                        className="ml-4 p-2 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-black border rounded-md"
                        value={data?.amount || "Loading..."}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <AccountDetails party={data} counterParty={data} />
                </div>
                <div className="flex justify-center items-center justify-between mx-2">
                  <div className="border p-3 bg-gray-300">
                    <p>Recommended SSI</p>
                  </div>
                  <div>
                    <div className="flex justify-center items-center">
                      <label
                        htmlFor="SSI option"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        SSI Details
                      </label>
                      <div className="ml-2">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          disabled
                        >
                          <option>Select SSI from pre-configured list</option>
                          <option>SSI 1</option>
                          <option>SSI 2</option>
                          <option>SSI 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <form className="space-y-8 divide-y divide-gray-300">
                    <div
                      className="mt-10 pt-10 grid grid-cols-4 gap-3 mr-3"
                      style={{ minWidth: "1385px" }}
                    >
                      <CustomBox
                        title="BUYR Proposed"
                        inputs={buyInputs.proposed_BUYR}
                        setInputs={(newValues) =>
                          setBuyInputs({
                            ...buyInputs,
                            proposed_BUYR: newValues,
                          })
                        }
                        fieldId="proposed_BUYR"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="BUYR"
                        inputs={buyInputs.BUYR}
                        setInputs={(newValues) =>
                          setBuyInputs({ ...buyInputs, BUYR: newValues })
                        }
                        fieldId="BUYR"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="SELL"
                        inputs={sellInputs.SELL}
                        setInputs={(newValues) =>
                          setSellInputs({ ...sellInputs, SELL: newValues })
                        }
                        fieldId="SELL"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="SELL Proposed"
                        inputs={sellInputs.proposed_SELL}
                        setInputs={(newValues) =>
                          setSellInputs({
                            ...sellInputs,
                            proposed_SELL: newValues,
                          })
                        }
                        fieldId="proposed_SELL"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="RECU Proposed"
                        inputs={buyInputs.proposed_RECU}
                        setInputs={(newValues) =>
                          setBuyInputs({
                            ...buyInputs,
                            proposed_RECU: newValues,
                          })
                        }
                        fieldId="proposed_RECU"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="RECU"
                        inputs={buyInputs.RECU}
                        setInputs={(newValues) =>
                          setBuyInputs({ ...buyInputs, RECU: newValues })
                        }
                        fieldId="RECU"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="DECU"
                        inputs={sellInputs.DECU}
                        setInputs={(newValues) =>
                          setSellInputs({ ...sellInputs, DECU: newValues })
                        }
                        fieldId="DECU"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1={1}
                        index2="97A::SAFE"
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="DECU Proposed"
                        inputs={sellInputs.proposed_DECU}
                        setInputs={(newValues) =>
                          setSellInputs({
                            ...sellInputs,
                            proposed_DECU: newValues,
                          })
                        }
                        fieldId="proposed_DECU"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={2}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="REI1 Proposed"
                        inputs={buyInputs.proposed_REI1}
                        setInputs={(newValues) =>
                          setBuyInputs({
                            ...buyInputs,
                            proposed_REI1: newValues,
                          })
                        }
                        fieldId="proposed_REI1"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={2}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="REI1"
                        inputs={buyInputs.REI1}
                        setInputs={(newValues) =>
                          setBuyInputs({ ...buyInputs, REI1: newValues })
                        }
                        fieldId="REI1"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={2}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="DEI1"
                        inputs={sellInputs.DEI1}
                        setInputs={(newValues) =>
                          setSellInputs({ ...sellInputs, DEI1: newValues })
                        }
                        fieldId="DEI1"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={2}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="DEI1 Proposed"
                        inputs={sellInputs.proposed_DEI1}
                        setInputs={(newValues) =>
                          setSellInputs({
                            ...sellInputs,
                            proposed_DEI1: newValues,
                          })
                        }
                        fieldId="DEI1"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={2}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="REAG Proposed"
                        inputs={buyInputs.proposed_REAG}
                        setInputs={(newValues) =>
                          setBuyInputs({
                            ...buyInputs,
                            proposed_REAG: newValues,
                          })
                        }
                        fieldId="REAG"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={4}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="REAG"
                        inputs={buyInputs.REAG}
                        setInputs={(newValues) =>
                          setBuyInputs({ ...buyInputs, REAG: newValues })
                        }
                        fieldId="REAG"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={4}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="DEAG"
                        inputs={sellInputs.DEAG}
                        setInputs={(newValues) =>
                          setSellInputs({ ...sellInputs, DEAG: newValues })
                        }
                        fieldId="DEAG"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={4}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="DEAG Proposed"
                        inputs={sellInputs.proposed_DEAG}
                        setInputs={(newValues) =>
                          setSellInputs({
                            ...sellInputs,
                            proposed_DEAG: newValues,
                          })
                        }
                        fieldId="DEAG"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={4}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="PSET Proposed"
                        inputs={buyInputs.proposed_PSET}
                        setInputs={(newValues) =>
                          setBuyInputs({
                            ...buyInputs,
                            proposed_PSET: newValues,
                          })
                        }
                        fieldId="PSET"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={2}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />

                      <CustomBox
                        title="PSET"
                        inputs={buyInputs.PSET}
                        setInputs={(newValues) =>
                          setBuyInputs({ ...buyInputs, PSET: newValues })
                        }
                        fieldId="PSET_1"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={2}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="PSET"
                        inputs={sellInputs.PSET}
                        setInputs={(newValues) =>
                          setSellInputs({ ...sellInputs, PSET: newValues })
                        }
                        fieldId="PSET_2"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        
                        index1="97A::SAFE"
                        index2={2}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                      <CustomBox
                        title="PSET Proposed"
                        inputs={sellInputs.proposed_PSET}
                        setInputs={(newValues) =>
                          setSellInputs({
                            ...sellInputs,
                            proposed_PSET_2: newValues,
                          })
                        }
                        fieldId="PSET_2"
                        labelOptions={[
                          { value: "P", label: "95P" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        index1="97A::SAFE"
                        index2={2}
                        selectOptions={[
                          { value: "P", label: "70E::DECL" },
                          { value: "Q", label: "95Q" },
                          { value: "R", label: "95R" },
                          { value: "S", label: "95S" },
                        ]}
                        disabled
                      />
                    </div>
                    <div
                      className="grid grid-cols-2 gap-3"
                      style={{ minWidth: "1380px" }}
                    >
                      <CommentsBox
                        title="Comments / remarks - Party side"
                        commentsData={partyCommentsData}
                        user={currentUser}
                        isActive={isPartySide}
                      />
                      <CommentsBox
                        title="Comments / remarks - Counter Party side"
                        commentsData={counterPartyCommentsData}
                        user={currentUser}
                        isActive={!isPartySide}
                      />
                      <Box
                        sx={{
                          padding: "5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "10px 0 0 0",
                        }}
                      >
                        <label>Confirm SSI</label>
                        <input
                          onChange={handleCheckboxChange("party")}
                          type="checkbox"
                          name="confirm"
                          value=""
                          style={{ marginLeft: "5px" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          padding: "5px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "10px 0 0 0",
                        }}
                      >
                        <label>Confirm SSI</label>
                        <input
                          onChange={handleCheckboxChange("counterParty")}
                          type="checkbox"
                          name="confirm"
                          value=""
                          style={{ marginLeft: "5px", border: "1px red" }}
                        />
                      </Box>
                    </div>
                  </form>
                </div>

                <div className="divide-y divide-gray-300 pt-8 flex justify-start">
                <button
                    type="copyncreate"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Copy & Create
                  </button>
                  <button
                    type="back"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-4"
                  >
                    Back
                  </button>
                  <button
                    type="confirm SSI"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-4"
                  >
                    Confirm SSI
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-zentrybg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <PendingSSIConfirmModal
        open={modalOpen}
        handleClose={handleModalClose}
        selectedAccount={data}
        onSave={handleSave}
        type={ssiType}
      />
    </>
  );
}
