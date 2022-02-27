import React from "react";
const TopBar = ({ setResultPerPage, setSortType }) => {
  return (
    <div className="card flex flex-row items-center justify-between rounded-lg border px-2 shadow">
      <div className="card-header">
        <p className="text-skin-primary p-1 font-semibold font-semibold">
          Component
        </p>
      </div>
      <div className="flex">
        <div className="flex items-center px-2">
          <p className="text-skin-secondary p-1 text-sm font-semibold">Show:</p>
          <select
            className=" text-skin-primary bg-skin-optional text-sm focus:ring-0 border-0 rounded"
            onChange={(e) => setResultPerPage(e.target.value)}
          >
            {[10, 20, 30, 40].map((number, key) => (
              <option key={key} value={number}>
                {number}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center px-2">
          <p className="text-skin-secondary p-1 text-sm font-semibold">
            Sort By:
          </p>
          <select
            className=" text-skin-primary bg-skin-optional text-sm focus:ring-0 border-0 rounded"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="0"> Default</option>)
            <option value="-1"> Price ( High {">"} Low )</option>
            <option value="1"> Price ( Low {">"} High )</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
