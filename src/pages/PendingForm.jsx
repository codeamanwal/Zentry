import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import AccountDetails from "../components/pending/AccountDetails";
import CustomBox from "../components/pending/CustomBox";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import CommentsBox from "../components/pending/CommentBox";
import PendingSSIConfirmModal from "../components/pending/PendingSSIConfirmModal"; // Ensure this import is correct

export default function PendingForm() {
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

  const handleInputChange = (section, index, isBuy) => (event) => {
    const { value } = event.target;
    if (isBuy) {
      setBuyInputs((prev) => {
        const newSection = [...prev[section]];
        newSection[index] = value;
        return { ...prev, [section]: newSection };
      });
    } else {
      setSellInputs((prev) => {
        const newSection = [...prev[section]];
        newSection[index] = value;
        return { ...prev, [section]: newSection };
      });
    }
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
          <main className="py-10">
            <div
              className="max-w-9xl mx-auto p-5 bg-white rounded-md shadow"
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
                <form className="space-y-8 divide-y divide-gray-300 z-5">
  <div className="mt-10 pt-10 grid grid-cols-4 gap-3 mr-3" style={{ minWidth: "1385px", position: "relative" }}>
    {[
      { title: 'BUYR Proposed', inputs: buyInputs.proposed_BUYR, setInputs: (newValues) => setBuyInputs({ ...buyInputs, proposed_BUYR: newValues }) },
      { title: 'BUYR', inputs: buyInputs.BUYR, setInputs: (newValues) => setBuyInputs({ ...buyInputs, BUYR: newValues }) },
      { title: 'SELL', inputs: sellInputs.SELL, setInputs: (newValues) => setSellInputs({ ...sellInputs, SELL: newValues }) },
      { title: 'SELL Proposed', inputs: sellInputs.proposed_SELL, setInputs: (newValues) => setSellInputs({ ...sellInputs, proposed_SELL: newValues }) },
      { title: 'RECU Proposed', inputs: buyInputs.proposed_RECU, setInputs: (newValues) => setBuyInputs({ ...buyInputs, proposed_RECU: newValues }) },
      { title: 'RECU', inputs: buyInputs.RECU, setInputs: (newValues) => setBuyInputs({ ...buyInputs, RECU: newValues }) },
      { title: 'DECU', inputs: sellInputs.DECU, setInputs: (newValues) => setSellInputs({ ...sellInputs, DECU: newValues }) },
      { title: 'DECU Proposed', inputs: sellInputs.proposed_DECU, setInputs: (newValues) => setSellInputs({ ...sellInputs, proposed_DECU: newValues }) },
      { title: 'REI1 Proposed', inputs: buyInputs.proposed_REI1, setInputs: (newValues) => setBuyInputs({ ...buyInputs, proposed_REI1: newValues }) },
      { title: 'REI1', inputs: buyInputs.REI1, setInputs: (newValues) => setBuyInputs({ ...buyInputs, REI1: newValues }) },
      { title: 'DEI1', inputs: sellInputs.DEI1, setInputs: (newValues) => setSellInputs({ ...sellInputs, DEI1: newValues }) },
      { title: 'DEI1 Proposed', inputs: sellInputs.proposed_DEI1, setInputs: (newValues) => setSellInputs({ ...sellInputs, proposed_DEI1: newValues }) },
      { title: 'REAG Proposed', inputs: buyInputs.proposed_REAG, setInputs: (newValues) => setBuyInputs({ ...buyInputs, proposed_REAG: newValues }) },
      { title: 'REAG', inputs: buyInputs.REAG, setInputs: (newValues) => setBuyInputs({ ...buyInputs, REAG: newValues }) },
      { title: 'DEAG', inputs: sellInputs.DEAG, setInputs: (newValues) => setSellInputs({ ...sellInputs, DEAG: newValues }) },
      { title: 'DEAG Proposed', inputs: sellInputs.proposed_DEAG, setInputs: (newValues) => setSellInputs({ ...sellInputs, proposed_DEAG: newValues }) },
      { title: 'PSET Proposed', inputs: buyInputs.proposed_PSET, setInputs: (newValues) => setBuyInputs({ ...buyInputs, proposed_PSET: newValues }) },
      { title: 'PSET', inputs: buyInputs.PSET, setInputs: (newValues) => setBuyInputs({ ...buyInputs, PSET: newValues }) },
      { title: 'PSET', inputs: sellInputs.PSET, setInputs: (newValues) => setSellInputs({ ...sellInputs, PSET: newValues }) },
      { title: 'PSET Proposed', inputs: sellInputs.proposed_PSET, setInputs: (newValues) => setSellInputs({ ...sellInputs, proposed_PSET: newValues }) },
    ].map((box, index) => (
      <div key={index} className="box-container9">
        <div className="relative box9">
          <CustomBox
            title={box.title}
            inputs={box.inputs}
            setInputs={box.setInputs}
            fieldId={box.title.replace(/\s+/g, '_')}
            labelOptions={[
              { value: "P", label: "95P" },
              { value: "Q", label: "95Q" },
              { value: "R", label: "95R" },
              { value: "S", label: "95S" },
            ]}
            handleInputChange={handleInputChange}
            selectOptions={[
              { value: "P", label: "70E::DECL" },
              { value: "Q", label: "95Q" },
              { value: "R", label: "95R" },
              { value: "S", label: "95S" },
            ]}
          />
        </div>
      </div>
    ))}
    <div className="vertical-line"></div>
    <div className="vertical-line" style={{ left: '38%', borderRight:"6px solid #84cc16" }}></div>
    <div className="vertical-line" style={{ left: '62%' , borderRight:"6px solid #FF0000"}}></div>
    <div className="vertical-line" style={{ left: '88%', borderRight: "6px solid lightgray"}}></div>
  </div>
  <div className="grid grid-cols-2 gap-3" style={{ minWidth: "1380px" }}>
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
                    type="reset"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Back
                  </button>
                  <button
                    type="reset"
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
