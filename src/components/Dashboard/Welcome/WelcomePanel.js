import React from "react";

const Welcome = () => {
  return (
    <div className="mb-6">
      <div className="flex">
        <div className="md:flex items-center gap-6">
          <h1 className="font-display text-2xl md:text-3xl text-gray-600 font-bold mb-1">
            Hi, Welcome back!
          </h1>
          <small className="font-display text-skin-secondary">
            Last login was 23 hours ago.&nbsp;
            <span className="underline cursor-pointer">View Details </span>
          </small>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
