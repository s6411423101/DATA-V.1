import React from "react";
import LookerDashboard from "@/components/LookerDashboard";

const dashbord = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <h1 className="text-black text-7xl">Phuket Tourism Dashboard</h1>
      <div className="min-h-screen">
        <LookerDashboard className="w-full h-full" />
      </div>
    </div>
  );
};

export default dashbord;
