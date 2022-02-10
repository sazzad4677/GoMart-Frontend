import React from "react";
import Statistics from "./Statistics";
import WelcomePanel from "./WelcomePanel";

const Welcome = () => {
  return (
    <div className="container z-10 mx-auto">
      <WelcomePanel />
      <Statistics />
    </div>
  );
};

export default Welcome;
