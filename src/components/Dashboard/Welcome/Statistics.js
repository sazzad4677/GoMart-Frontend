import React from "react";

const Statistics = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 card">
          <div className="flex items-start justify-between">
            <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">
              23,455
            </h2>
            <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>40%</span>
            </span>
          </div>
          <p className="text-sm leading-none text-gray-600">Posts</p>
        </div>
        <div className="p-6 card">
          <div className="flex items-start justify-between">
            <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">
              55
            </h2>
            <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>240%</span>
            </span>
          </div>
          <p className="text-sm leading-none text-gray-600">Comments</p>
        </div>
        <div className="p-6 card">
          <div className="flex items-start justify-between">
            <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">
              129,752
            </h2>
            <span className="flex items-center space-x-1 text-sm font-medium leading-none text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>22%</span>
            </span>
          </div>
          <p className="text-sm leading-none text-gray-600">Activities</p>
        </div>
        <div className="p-6 card">
          <div className="flex items-start justify-between">
            <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">
              1,255
            </h2>
            <span className="flex items-center space-x-1 text-sm font-medium leading-none text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>10%</span>
            </span>
          </div>
          <p className="text-sm leading-none text-gray-600">Users</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
