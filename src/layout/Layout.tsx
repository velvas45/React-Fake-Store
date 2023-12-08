import { Routes, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/pages/Login";

const Layout = () => {
  return (
    <div className="w-full h-screen">
      <div className="px-[20px] lg:px-[133px] pt-[55px]">
        <Header />
        <div className="mt-8">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
