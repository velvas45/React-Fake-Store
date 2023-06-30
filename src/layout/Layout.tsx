import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
