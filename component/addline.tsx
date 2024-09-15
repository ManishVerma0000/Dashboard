import { execSync } from "child_process";
import React from "react";

export default function addLine() {
  return (
    <>
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
            //   onChange={(e) => {
            //     setRegisterLineMen({
            //       ...registerLineMen,
            //       linemenName: e.target.value,
            //     });
            //   }}
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
            //   onChange={(e) => {
            //     setRegisterLineMen({
            //       ...registerLineMen,
            //       lineName: e.target.value,
            //     });
            //   }}
            >
              {/* <option value="">Select a district</option>
              {districtList.map((district, index) => (
                <option key={index + 1} value={district}>
                  {district}
                </option>
              ))} */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Line
            </label>
            <input
            //   onChange={(e) => {
            //     setRegisterLineMen({
            //       ...registerLineMen,
            //       lineName: e.target.value,
            //     });
            //   }}
              placeholder="Enter Line for the Line Men"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Add Password For the Candidate
            </label>
            <input
            //   onChange={(e) => {
            //     setRegisterLineMen({
            //       ...registerLineMen,
            //       password: e.target.value,
            //     });
            //   }}
              placeholder="Enter Password for LineMen"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            // onSubmit={(e) => {
            //   registerLineMenHandler;
            // }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
