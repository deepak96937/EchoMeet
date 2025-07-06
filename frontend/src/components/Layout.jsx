import React from "react";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
