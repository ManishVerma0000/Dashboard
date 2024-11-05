import React, { useState, useEffect } from "react";
import "../src/app/globals.css";
import api from "../api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddLine from "../component/addline";
import LineMen from "../component/linemen";
import RegisterStation from "../component/registerstation";
export default function DashBoard() {
  const [districtList, setDistrictList] = useState<string[]>([]);
  const [showComponent, setShowComponent] = useState("");

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

  const [showInput, setShowInput] = useState(false);

  const handleRegisterClick = () => {
    setShowComponent("1");
    setShowInput(!showInput);
  };

  return (
    <>
      <ToastContainer />
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

            <div
              role="button"
              className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
              onClick={() => {
                setShowComponent("2");
              }}
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
              Register Line
            </div>
          </nav>
        </div>
        {showComponent == "2" ? (
          <AddLine districtList={districtList} />
        ) : showComponent == "1" ? (
          <LineMen districtList={districtList} />
        ) : showComponent == "3" ? (
          <RegisterStation districtList={districtList} />
        ) : null}
      </div>
    </>
  );
}
