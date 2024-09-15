import React, { useState, useEffect } from "react";
import "../src/app/globals.css";
import api from "../api";

export default function DashBoard() {
  const [districtList, setDistrictList] = useState([]);
  const [registerLineMen, setRegisterLineMen] = useState({
    linemenName: "",
    district: "",
    lineName: "",
    password: "",
  });
  useEffect(() => {
    api
      .get("/state-list")
      .then((res) => {
        setDistrictList(res.data.districts);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const registerLineMenHandler = () => {
    console.log("clicked");
    api
      .post("/register-lineMen", registerLineMen)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [showInput, setShowInput] = useState(false);

  const handleRegisterClick = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      <div className="flex h-[calc(100vh-2rem)] w-full">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-full w-[20rem] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <a href="javascript:void(0)">
              <img
                src={"./electricity.jpeg"}
                alt="logo"
                className="w-20 mb-8 mx-auto block rounded-full"
              />
            </a>
          </div>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
              onClick={handleRegisterClick}
            >
              <div className="grid place-items-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              Register Linemen
            </div>
          </nav>
        </div>
        {showInput && (
          <div className="w-1/2 bg-white shadow-xl p-4 m-20">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Candidate Name
                </label>
                <input
                  onChange={(e) => {
                    setRegisterLineMen({
                      ...registerLineMen,
                      linemenName: e.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Enter candidate name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Select District
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => {
                    setRegisterLineMen({
                      ...registerLineMen,
                      lineName: e.target.value,
                    });
                  }}
                >
                  <option value="">Select a district</option>
                  {districtList.map((district, index) => (
                    <option key={index + 1} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Select Line
                </label>
                <input
                  onChange={(e) => {
                    setRegisterLineMen({
                      ...registerLineMen,
                      lineName: e.target.value,
                    });
                  }}
                  placeholder="Enter Line for the Line Men"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Add Password For the Candidate
                </label>
                <input
                  onChange={(e) => {
                    setRegisterLineMen({
                      ...registerLineMen,
                      password: e.target.value,
                    });
                  }}
                  placeholder="Enter Password for LineMen"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <button
                onSubmit={() => {
                  registerLineMenHandler;
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
