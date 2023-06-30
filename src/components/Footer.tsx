import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-center bg-[#212121] text-white text-base py-5 space-x-2 w-full">
        <p>Copyright {new Date().getFullYear()}</p>
        <div className="w-2.5 h-2.5 bg-white rounded-[10px]"></div>
        <p>All right reserved</p>
        <div className="w-2.5 h-2.5 bg-white rounded-[10px]"></div>
        <p>Prada</p>
      </div>
    </footer>
  );
};

export default Footer;
