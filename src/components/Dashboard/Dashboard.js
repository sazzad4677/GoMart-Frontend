import React from "react";
import Header from "./Header";
import SidePanel from "./SidePanel";
import Welcome from "./Welcome/Welcome";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SidePanel />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="mr-auto w-full px-4 py-8 sm:px-6  lg:px-8">
            <Welcome />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
