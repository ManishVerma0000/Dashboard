import React, { useState } from "react";
import { useEffect } from "react";
import api from "../api";
import { Station } from "../model/stationList";
import { LineDetails } from "../model/lineList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface AddLineProps {
  districtList: string[];
}
export default function LineMen({ districtList }: AddLineProps) {
  const [apiData, setApiData] = useState({
    linemenName: "",
    district: "",
    lineName: "",
    password: "",
    station: "",
  });
  const [district, setdistrict] = useState("");
  const [stationList, setStationList] = useState<Station[]>([]);
  const [station, setStation] = useState("");
  const [line, setLine] = useState<LineDetails[]>([]);

  useEffect(() => {
    api
      .get(`/lineDetailsStationWise?district=${district}&station=${station}`)
      .then((res) => {
        console.log(res.data);
        setLine(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [district, station]);

  useEffect(() => {
    api
      .get(`/findStationNameFromDistrict?district=${district}`)
      .then((res) => {
        setStationList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [district]);

  const registerlineMenHandler = () => {
    api
      .post("/register-lineMen", apiData)
      .then((res) => {
        toast.success("line men is added successfullly..");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.warn("line men is  not added..");
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="w-1/2 bg-white shadow-xl p-4">
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
                setApiData({ ...apiData, linemenName: e.target.value });
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
                setdistrict(e.target.value),
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

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select station
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => {
                setStation(e.target.value),
                  setApiData({ ...apiData, station: e.target.value });
              }}
            >
              <option value="">Select a Sub-station</option>
              {stationList.map((district, index) => (
                <option key={index + 1} value={district.stationName}>
                  {district.stationName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select line
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => {
                setApiData({ ...apiData, lineName: e.target.value });
              }}
            >
              {line.map((district, index) => (
                <option key={index + 1} value={district.lineName}>
                  {district.lineName}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Add Password For the Candidate
            </label>
            <input
              onChange={(e) => {
                setApiData({
                  ...apiData,
                  password: e.target.value,
                });
              }}
              placeholder="Enter Password for LineMen"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={() => {
              registerlineMenHandler();
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
