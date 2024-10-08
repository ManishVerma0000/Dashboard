import React, { useEffect, useState } from "react";
import api from "../api";
import { Station } from "../model/stationList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface AddLineProps {
  districtList: string[];
}
export default function AddLine({ districtList }: AddLineProps) {
  const [district, setDistrict] = useState("");
  const [stationList, setStationList] = useState<Station[]>([]);
  const [apiData, setApiData] = useState({
    lineName: "",
    district: "",
    station: "",
  });
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

  const lineRegisterHandler = () => {
    api
      .post("/createLine", apiData)
      .then(() => {
        toast.success("line is added successfully..");
      })
      .catch(() => {
        toast.warn("line is not added");
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="w-1/2 bg-white shadow-xl p-4 m-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select District
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => {
                setDistrict(e.target.value),
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
              Select Sub-Station
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e) => {
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
              Add Line-Name
            </label>
            <input
              onChange={(e) => {
                setApiData({ ...apiData, lineName: e.target.value });
              }}
              placeholder="Enter Password for LineMen"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={() => {
              lineRegisterHandler();
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
