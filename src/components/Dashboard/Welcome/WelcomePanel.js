import React from "react";

const Welcome = () => {
  return (
    <div className="mb-6">
      <div className="flex">
        <div className="items-center gap-6 md:flex">
          <h1 className="font-display mb-1 text-2xl font-bold text-gray-600 md:text-3xl">
            Hi, Welcome back!
          </h1>
          <small className="font-display text-skin-secondary">
            Last login was 23 hours ago.&nbsp;
            <span className="cursor-pointer underline">View Details </span>
          </small>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Welcome;
