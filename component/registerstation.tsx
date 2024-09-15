import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface AddLineProps {
  districtList: string[];
}
import api from "../api";
export default function RegisterStation({ districtList }: AddLineProps) {
  const [apiData, setApiData] = useState({
    stationName: "",
    district: "",
  });
  const registerStationHandler = () => {
    api
      .post("/registerStation", apiData)
      .then((res) => {
        toast.success("station is added");
        console.log(res.data);
      })
      .catch((err) => {
        toast.warn("station not added");
        console.log(err);
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="w-1/2 bg-white shadow-xl p-4 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter Station Name
            </label>
            <input
              onChange={(e) => {
                setApiData({ ...apiData, stationName: e.target.value });
              }}
              type="text"
              placeholder="Enter Station Name"
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
                setApiData({ ...apiData, district: e.target.value });
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
          <button
            onClick={() => {
              registerStationHandler();
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
