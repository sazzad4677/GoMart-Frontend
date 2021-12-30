import React from "react";
import Header from "./Header";
import SidePanel from "./SidePanel";
import Welcome from "./Welcome/Welcome";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SidePanel />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full  mr-auto">
            <Welcome />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
